import request from "supertest";
import app from "../../../src/app";
import { ensureDatabaseCreated } from "../../../src/repositories/sequelize";

describe("GET /authors", () => {

    beforeAll(async () => {
        await ensureDatabaseCreated();
    });    
    
    it("Should return 200", async () => {
        const response = await request(app).get("/authors");
        expect(response.statusCode).toEqual(200);
    })
});