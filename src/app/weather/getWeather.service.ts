import {Response} from '@angular/http';

export const getWeatherService = (http)=>
{
    return new Promise((success, failure)=>
	{
		http.get('http://api.openweathermap.org/data/2.5/weather?q=Mechanicsville,va&units=imperial&APPID=ca491ee18a95d401ffa16f0617e57069')
		.toPromise()
		.then((response:Response)=>
		{
			const body = response.json();
			success(body);
		})
		.catch((err:any)=>
		{
			// console.log("login.saga.error:", err);
			failure(err);
		});
	});
};

/*
{
  "coord": {
    "lon": -77.37,
    "lat": 37.61
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 37.42,
    "pressure": 1014,
    "humidity": 55,
    "temp_min": 35.6,
    "temp_max": 39.2
  },
  "visibility": 16093,
  "wind": {
    "speed": 3.04,
    "deg": 155.501
  },
  "clouds": {
    "all": 1
  },
  "dt": 1483655820,
  "sys": {
    "type": 1,
    "id": 2871,
    "message": 0.1744,
    "country": "US",
    "sunrise": 1483619088,
    "sunset": 1483653982
  },
  "id": 4772566,
  "name": "Mechanicsville",
  "cod": 200
}
*/