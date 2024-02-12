Weather app by Oskari Tervo for Buutti Trainee Academy. Meant to demonstrate the essentials of React in a small and simple scale.

How to run:

-Clone the repository on your PC
-npm install
-Go to https://openweathermap.org/, create a free account and get your API key
-Create .env file to the project's root and add VITE_API_KEY environmental variable with your API key in it
    Example: VITE_API_KEY=insertyourapikeyhere
-npm run dev

The app should now be running in http://127.0.0.1:5173/. If you want to change to port, you can add
server: {
    port: yourportnumberhere,
  },
inside defineConfig in your vite.config.js file


API documentations and other links:
-Current weather data: https://openweathermap.org/current
-Geocoding API: https://openweathermap.org/api/geocoding-api
-Weather icons: https://openweathermap.org/weather-conditions
-Other openweather.org APIs: https://openweathermap.org/api