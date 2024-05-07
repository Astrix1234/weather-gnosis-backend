import request from "supertest";
import app from "../app";

describe("GET /api/weather", () => {
  it("should return a 400 error if lat/lon are missing", async () => {
    const response = await request(app).get("/api/weather");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      status: "error",
      code: 400,
      message: "Missing or invalid latitude or longitude",
    });
  });

  it("should return a 200 response with the weather forecast data", async () => {
    const response = await request(app)
      .get("/api/weather")
      .query({ lat: "50.06143", lon: "19.93658" });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    const dayForecast = response.body[0];
    expect(dayForecast).toHaveProperty("date");
    expect(dayForecast).toHaveProperty("weatherCode");
    expect(dayForecast).toHaveProperty("tempMin");
    expect(dayForecast).toHaveProperty("tempMax");
    expect(dayForecast).toHaveProperty("estimatedEnergy");
  });
});
