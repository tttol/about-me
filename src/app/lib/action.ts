"use server";

import { CreateItemException } from "../exception/exceptions";
import { generateAmplifyClient } from "./client";
import { validateForm } from "./validation";

const client = generateAmplifyClient();
const MEET_TOKEN = process.env.MEET_TOKEN;

export async function writeItem(formData: FormData, token: string | null) {
  if (token !== MEET_TOKEN) {
    console.error(`Token error. token=${token}`);
    throw new CreateItemException("Failed to token validation.");
  }
  validateForm(formData);

  const name: string = formData.get("name") as string;
  createItem(name);

  return name;
}

const createItem = async (name: string) => {
  await client.models.Meeting.create({
    name: name,
  });
};

export async function fetchMeetingLog() {
  const { data: items, errors } = await client.models.Meeting.list();
  if (errors) {
    throw new Error(`Failed to fetch meeting log. ${JSON.stringify(errors)}`);
  }
  return items;
}
