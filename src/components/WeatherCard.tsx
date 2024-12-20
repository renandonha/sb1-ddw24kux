import React from 'react';
import { Cloud, Sun, Wind, Droplets } from 'lucide-react';

export function WeatherCard() {
  const weather = {
    temperature: 22,
    humidity: 65,
    windSpeed: 8,
    condition: 'Partly Cloudy',
    forecast: [
      { time: '12 PM', temp: 24, icon: Sun },
      { time: '3 PM', temp: 23, icon: Cloud },
      { time: '6 PM', temp: 20, icon: Cloud },
    ]
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Weather Conditions</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <Sun className="w-5 h-5" />
            <span className="font-medium">Temperature</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">{weather.temperature}°C</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <Droplets className="w-5 h-5" />
            <span className="font-medium">Humidity</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">{weather.humidity}%</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <Wind className="w-5 h-5" />
            <span className="font-medium">Wind Speed</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">{weather.windSpeed} km/h</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <Cloud className="w-5 h-5" />
            <span className="font-medium">Condition</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">{weather.condition}</p>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4">
        <h3 className="text-sm font-medium text-gray-600 mb-3">Today's Forecast</h3>
        <div className="flex justify-between">
          {weather.forecast.map((item, index) => (
            <div key={index} className="text-center">
              <span className="text-sm text-gray-600">{item.time}</span>
              <item.icon className="w-6 h-6 mx-auto my-2 text-blue-600" />
              <span className="font-medium">{item.temp}°C</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}