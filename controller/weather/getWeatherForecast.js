import axios from "axios";

const solarPanelPower = 2.5;
const panelEfficiency = 0.2;

function calculateSolarEnergy(exposureHours) {
  return solarPanelPower * exposureHours * panelEfficiency;
}

export const getWeatherForecast = async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon || isNaN(lat) || isNaN(lon)) {
    return res
      .status(400)
      .json({ error: "Missing or invalid latitude or longitude" });
  }

  try {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: lat,
        longitude: lon,
        daily: [
          "temperature_2m_max",
          "temperature_2m_min",
          "weathercode",
          "sunshine_duration",
        ],
        timezone: "auto",
      },
    });

    const forecast = response.data.daily;
    const result = forecast.time.map((date, index) => {
      const sunshineHours = forecast.sunshine_duration[index] / 3600;
      return {
        date,
        weatherCode: forecast.weathercode[index],
        tempMin: forecast.temperature_2m_min[index],
        tempMax: forecast.temperature_2m_max[index],
        estimatedEnergy: calculateSolarEnergy(sunshineHours).toFixed(2),
      };
    });

    res.json(result);
  } catch (error) {
    console.error("Unable to fetch weather data:", error);
    res.status(500).json({ error: "Unable to fetch weather data" });
  }
};
