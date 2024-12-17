import { describe, expect, it, vi} from "vitest";
import request from "supertest";
import app from "../../app";

vi.mock("../../src/module/user/model", () =>{
  return{
   UserModel:{     
    findAll: vi.fn(async () => [
      {
        "id": "fe0989f7-acac-4c35-87a4-1221555adae7",
        "email": "test1@test.com",
        "password": "1234",
        "fullname": "Test User 1",
        "profile": "Administrador"
    },
    {
        "id": "04eb6627-055a-4d07-936f-1ef60a5408bf",
        "email": "daniel2@drl.cl",
        "password": "$2a$10$mAriFOJ0/qrmJaePTWXwdOqPes4rtQ9NAHXiRa8iQy1gyxrP.XRKG",
        "fullname": "Daniel Rojas",
        "profile": "Usuario"
    },
    ]),
    findOneById:vi.fn(async (id) => {
      return { 
        "id": "04eb6627-055a-4d07-936f-1ef60a5408bf",
        "email": "daniel2@drl.cl",
        "password": "$2a$10$mAriFOJ0/qrmJaePTWXwdOqPes4rtQ9NAHXiRa8iQy1gyxrP.XRKG",
        "fullname": "Daniel Rojas",
        "profile": "Usuario"
    };
    }),
    findByEmail: vi.fn(async (id) => {
      return { 
        "id": "04eb6627-055a-4d07-936f-1ef60a5408bf",
        "email": "daniel@test.com",
        "password": "$2a$10$mAriFOJ0/qrmJaePTWXwdOqPes4rtQ9NAHXiRa8iQy1gyxrP.XRKG",
        "fullname": "Daniel Rojas",
        "profile": "Usuario"
    };
    })
   }
  }
})

describe("GET /user", () => {
  it("should return users", async () => {
   const {status, body} = await request(app).get("/api/v1/user");
   console.log(body);
   expect(status).toBe(200)
  });
}); 

describe("GET /user/id", () => {
  it("should return users", async () => {
  const userID = "04eb6627-055a-4d07-936f-1ef60a5408bf";
  const {status, body} = await request(app).get(`/api/v1/user/${userID}`);
  console.log(body);
  expect(status).toBe(200)   
  expect(body.id).toBe(userID);
  }); 
}); 

describe("GET /user/email", () => {  
      it("should return users", async () => {
      const userEmail = "daniel@test.com";
      const {status, body} = await request(app).get(`/api/v1/user/email/${userEmail}`);
      console.log(body);
      expect(status).toBe(200)
      expect(body.email).toBe(userEmail);
    }); 
});