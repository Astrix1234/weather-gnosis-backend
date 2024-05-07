# Weather Forecast API

This project provides an API to fetch weather forecast data and estimate solar energy production for a specified location.

## Features

- 7-day weather forecast using [Open-Meteo API](https://open-meteo.com/)
- Estimation of solar energy production based on solar exposure

## Setup

### Prerequisites

- Node.js (v16 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Install the dependencies
3. Create .env file in the project root

## Usage

### To start the server in development mode

npm run start:dev

### To start the server in production mode

npm run start

## API Endpoints

GET /api/weather?lat=<latitude>&lon=<longitude>

### Parameters:

    lat: Latitude of the location (required)
    lon: Longitude of the location (required)

### Response:

    [

{
"date": "2024-05-08",
"weatherCode": 2,
"tempMin": 12.5,
"tempMax": 22.3,
"estimatedEnergy": "4.5"
},
...
]
