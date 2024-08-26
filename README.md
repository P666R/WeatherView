# Weather Forecast Dashboard

## Overview

The Weather Forecast Dashboard is a modern, responsive web application built with React, Vite, and Shadcn/UI. It provides users with current weather information and a 5-day forecast for any city worldwide. The app features a clean, intuitive interface with support for both light and dark themes.

## Features

- Current weather display
- 5-day weather forecast
- Search functionality for any city
- Temperature unit toggle (Celsius/Fahrenheit)
- Responsive design for mobile and desktop
- Light and dark theme support

## Technologies Used

- React
- Vite
- Shadcn/UI
- Axios for API requests
- OpenWeatherMap API

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/P666R/wasserstoff-FullstackInternTask.git
   ```

2. Navigate to the project directory:

   ```
   cd wasserstoff-FullstackInternTask
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   VITE_OPEN_WEATHER_API_KEY=your_api_key_here
   ```

## Usage

1. Start the development server:

   ```
   npm run dev
   ```

2. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal).

3. Enter a city name in the search bar to get weather information.

4. Use the toggle button to switch between Celsius and Fahrenheit.

5. Click the theme toggle button in the top-right corner to switch between light and dark modes.

## Building for Production

To create a production build, run:

```
npm run build
```

This will generate a `dist` folder with the production-ready files.

## Deployment

You can deploy this app to various platforms. Here are instructions for deploying to Vercel:

1. Install the Vercel CLI:

   ```
   npm install -g vercel
   ```

2. Run the following command in your project directory:

   ```
   vercel
   ```

3. Follow the prompts to deploy your application.

Remember to set your environment variables (API key) in your Vercel project settings.
