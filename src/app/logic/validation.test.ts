import { describe, expect, it, vi } from "vitest";
import { CreateItemException } from "../exception/exceptions";
import { validateForm } from "./validation";

vi.mock("./auth");

describe("validateForm", () => {
  it("正常系 - 日本語", () => {
    const formData = new FormData();
    formData.append("name", "山田太郎");

    expect(() => validateForm(formData)).not.toThrow();
  });
  
  it("正常系 - 英数字記号", () => {
    const formData = new FormData();
    formData.append("name", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijolmnopqrstuvwxyz1234567890@*:;<>/!?");

    expect(() => validateForm(formData)).not.toThrow();
  });

  it("name が空文字の場合に例外が発生すること", () => {
    const formData = new FormData();
    formData.append("name", "");

    expect(() => validateForm(formData)).toThrow(CreateItemException);
  });

  it("name が存在しない場合に例外が発生すること", () => {
    const formData = new FormData();

    expect(() => validateForm(formData)).toThrow(CreateItemException);
  });
});

// describe("writeItem", () => {
//   it("有効なトークンと正しいデータで成功すること", async () => {
//     const formData = new FormData();
//     formData.append("name", "Valid Name");
//     vi.mocked(isValidToken).mockReturnValue(true);

//     await expect(writeItem(formData, "validToken")).resolves.not.toThrow();
//   });

//   it("トークンが無効な場合に例外が発生すること", async () => {
//     const formData = new FormData();
//     formData.append("name", "Valid Name");
//     vi.mocked(isValidToken).mockReturnValue(false);

//     await expect(writeItem(formData, "invalidToken")).rejects.toThrow(
//       CreateItemException
//     );
//   });

//   it("無効なデータの場合に例外が発生すること", async () => {
//     const formData = new FormData();
//     formData.append("name", ""); // 無効なデータ
//     vi.mocked(isValidToken).mockReturnValue(true);

//     await expect(writeItem(formData, "validToken")).rejects.toThrow(
//       CreateItemException
//     );
//   });
// });