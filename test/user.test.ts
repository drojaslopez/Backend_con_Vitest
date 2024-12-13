import { describe, expect, test } from "vitest";

export const sum = (a: number, b: number) => a + b;

describe("sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

export const findOneById = async (id: number) => {
    if (id === 1) {
      return Promise.resolve({ id: 1, name: "John Doe" });
    }
    return Promise.resolve(null);
  };
  
  describe("findOneById", () => {
    test("finds user with id 1", async () => {
      const idUser = 1;
      const user = await findOneById(idUser);
      expect(user).toEqual({ id: 1, name: "John Doe" });
    });
  
    test("does not find user with id 2", async () => {
      const user = await findOneById(2);
      expect(user).toBeNull();
    });
  });