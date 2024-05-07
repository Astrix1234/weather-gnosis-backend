import express from "express";
import { getWeatherForecast } from "../../controller/weather/getWeatherForecast.js";
import { validateLocationQuery } from "../../validators/validateLocationQuery.js";

const router = express.Router();

router.get("/", validateLocationQuery, getWeatherForecast);

export default router;
