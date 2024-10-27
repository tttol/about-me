"use server";

import type { Schema } from "@/../amplify/data/resource";
import outputs from "@/../amplify_outputs.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";

Amplify.configure(outputs);
const client = generateClient<Schema>();

export async function writeItem() {
  const { data: items, errors } = await client.models.Meeting.list();
  if (errors) {
    throw errors;
  }
  return items;
}
