# The Weather App

☀️🌤️⛅🌥️🌦️🌧️⛈️🌩️🌨️❄️🌫️💨🌪️🌈

This is a modern and visually appealing weather application built with **React** on the frontend and **Node.js + NestJS** on the backend. The app displays current weather and a weather forecast for the next 6 days, displaying the weekly weather in total. There is also astronomical data for the moon phases and the current star sign, daylight data such as sunrise, sunset and day duration and a lot of weather information which is displayed with easily understandable icons and as little text as possible.

## Features

- **Current Weather**: Fetches and displays thorough real-time weather information.
- **6-Day Forecast**: Daily forecast including min and max temperature, wind and precipitation.
- **Moon Phase Data**: Calculated locally using the SunCalc library to determine daily moon phases and zodiac signs.
- **Automatic Updates**: Current weather updates every 30 minutes for accurate data.
- **Interactive UI**: Modern design with SVG icons and animated backgrounds.
- **Multi-metric Support**: Choose wind speed units (`km/h`, `m/s`, `mph`, `kn`) with a responsive button grid.
- **Multi-language Support**: Users can choose between Bulgarian, English and Spanish.
- **Geocoding**: A feature that autocompleted search locations with Open Meteo Geocoding API.

## Technologies Used

- **Frontend**: React, JavaScript, Tailwind CSS
- **Backend**: Node.js, NestJS
- **HTTP Client**: Axios (with RxJS in NestJS)
- **APIs**:
  - Open Meteo for weather and geocoding data

## Architecture

- **Frontend**: React app handles UI, user interactions, and displaying weather data.
- **Backend**: NestJS server fetches data from external APIs, caches moon phase info to limit API usage, and serves data to the frontend.
