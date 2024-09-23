import request from "supertest";
import app from "../../../src/app";

describe("GET /authors", () => {
    jest.setTimeout(10000 * 100); // Aumenta el tiempo de espera de las pruebas
    
    it("Should return 200", async () => {
        const response = await request(app).get("/authors").send();
        expect(response.statusCode).toEqual(200);
    })
});