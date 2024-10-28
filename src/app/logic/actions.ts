"use server";

import type { Schema } from "@/../amplify/data/resource";
import outputs from "@/../amplify_outputs.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import z from "zod";
import { CreateItemException } from "../exception/exceptions";

Amplify.configure(outputs);
const client = generateClient<Schema>();
const MEET_TOKEN = process.env.MEET_TOKEN;

const schema = z.object({
  name: z
    .string({
      required_error: "Name is required.",
    })
    .min(1, "At least 1 character is required.")
    .trim(),
});

export async function writeItem(formData: FormData, token: string | null) {
  if (!isValidToken(token)) {
    console.error("Token error.", token);
    throw new CreateItemException("Failed to token validation.");
  }
  validateForm(formData);

  createItem(formData.get("name") as string);
}

const validateForm = (formData: FormData) => {
  const parse = schema.safeParse({
    name: formData.get("name"),
  });
  if (!parse.success) {
    console.log("parse error", parse.error);
    throw new CreateItemException("Validation error.");
  }
};

const isValidToken = (token: string | null): boolean => {
  return token === MEET_TOKEN;
};

const createItem = async (name: string) => {
  await client.models.Meeting.create({
    name: name,
  });
};
