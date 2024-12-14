import { describe, expect, it } from "vitest";
import express from "express";
import request from "supertest";

const app = express();

app.get("/users", (req, res) => {
  res.json([{ name: "Rex" }]);
});

describe("GET /users", () => {
  it("should return users", async () => {
    const response = await request(app).get("/users");
    expect(response.body).toEqual([{ name: "Rex" }]);
  });
});