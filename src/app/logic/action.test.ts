import { describe, expect, it, vi } from "vitest";
import { CreateItemException } from "../exception/exceptions";
import { writeItem } from "./action";

vi.mock("./client.ts", () => ({
  generateAmplifyClient: vi.fn(() => ({
    models: {
      Meeting: {
        create: vi.fn(),
      },
    },
  })),
}));

vi.mock("./action.ts", async (importOriginal) => {
  const mod = await importOriginal<typeof import("./action.ts")>();
  return {
    ...mod,
    createItem: vi.fn().mockResolvedValue(0),
  };
});

describe("writeItem", () => {
  const MEET_TOKEN = "test-token";

  it("正常系", async () => {
    const formData = new FormData();
    formData.append("name", "Valid Name");
    
    const actual = await writeItem(formData, MEET_TOKEN);
    expect(actual).toEqual("Valid Name");
  });

  it("トークンが無効な場合に例外が発生すること", async () => {
    const formData = new FormData();
    formData.append("name", "Valid Name");

    expect(writeItem(formData, "invalid-token")).rejects.toThrow(
      CreateItemException
    );
  });

  it("nameが無効な場合に例外が発生すること", async () => {
    const formData = new FormData();
    formData.append("name", "");

    expect(writeItem(formData, MEET_TOKEN)).rejects.toThrow(
      CreateItemException
    );
  });
});
