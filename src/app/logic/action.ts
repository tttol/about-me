"use server";

import type { Schema } from "@/../amplify/data/resource";
import outputs from "@/../amplify_outputs.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { CreateItemException } from "../exception/exceptions";
import { validateForm } from "./validation";

Amplify.configure(outputs);
const client = generateClient<Schema>();
const MEET_TOKEN = process.env.MEET_TOKEN;

export async function writeItem(formData: FormData, token: string | null) {
  if (token !== MEET_TOKEN) {
    console.error("Token error.", token);
    throw new CreateItemException("Failed to token validation.");
  }
  validateForm(formData);

  createItem(formData.get("name") as string);
}

const createItem = async (name: string) => {
  await client.models.Meeting.create({
    name: name,
  });
};
