export const dynamic = 'force-dynamic' // Force SSR

async function getWeatherData() {
  const API_KEY = process.env.WEATHER_API_KEY
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`)
  
  if (!res.ok) {
    throw new Error('Failed to fetch weather data')
  }
  
  return res.json()
}

export default async function WeatherPage() {
  const weather = await getWeatherData()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Weather in {weather.name}</h1>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{weather.main.temp}°C</h2>
            <p className="text-gray-600 capitalize">{weather.weather[0].description}</p>
          </div>
          <div className="text-right">
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  )
}