import { describe, expect, it, vi} from "vitest";
import request from "supertest";
import app from "../../app";

vi.mock("../../src/module/user/model", () =>{
   return{
    UserModel:{
      /* findAll: vi.fn(async => []), */
      findOneById: vi.fn((request , response, next) =>{
        request.id="7dbc1138-8e6c-473d-8350-a51ea0575457";
        next();
      })

      /* findByEmail: vi.fn((request , response, next) =>{
        request.email="daniel@test.com";
        next();
      }) */
    }
   }
})


describe("GET /user/email", () => {
 /*  it("should return users", async () => {
    const {status, body} = await request(app).get("/api/v1/user");
    console.log(body);
    expect(status).toBe(200)
  }); */

    it("should return users", async () => {
    const {status, body} = await request(app)
    .get("/api/v1/user/")    
    .query({ id: '7dbc1138-8e6c-473d-8350-a51ea0575457' });

    console.log(body);
    expect(status).toBe(200)
  }); 

 /*  it("should return users by Email", async () => {
    const {status, body, } = await request(app)
    .get("/api/v1/user/email/")
    console.log(body);
    expect(status).toBe(200)
  }); */


});