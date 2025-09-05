const weatherJSON = `
{
  "location": "Sofia",
  "latitude": 42.6875,
  "longitude": 23.3125,
  "timezone": "GMT+3",
  "elevation": 555,
  "currentWeather": {
    "time": "2025-08-27T15:15",
    "temperature_2m": 27,
    "relative_humidity_2m": 15,
    "apparent_temperature": 25,
    "precipitation": 0,
    "weather_code": 1,
    "cloud_cover": 13,
    "surface_pressure": 954.5,
    "wind_speed_10m": 1.13,
    "wind_direction_10m": 45
  },
  "dailyWeatherToday": {
    "date": "2025-08-27",
    "weather_code": 3,
    "temperature_2m_max": 27,
    "temperature_2m_min": 11,
    "sunrise": "2025-08-27T06:46",
    "sunset": "2025-08-27T20:09",
    "daylight_duration": 48209.31,
    "uv_index_max": 6.65,
    "precipitation_probability_max": 0,
    "wind_speed_10m_max": 2.95,
    "precipitation_sum": 0,
    "wind_direction_10m_dominant": 76
  },
  "dailyWeatherFutureDays": {
    "dayOne": {
      "date": "2025-08-28",
      "weather_code": 0,
      "temperature_2m_max": 28,
      "temperature_2m_min": 14,
      "sunrise": "2025-08-28T06:47",
      "sunset": "2025-08-28T20:08",
      "daylight_duration": 48044.29,
      "uv_index_max": 6.65,
      "precipitation_probability_max": 0,
      "wind_speed_10m_max": 3.49,
      "precipitation_sum": 0,
      "wind_direction_10m_dominant": 93
    },
    "dayTwo": {
      "date": "2025-08-29",
      "weather_code": 0,
      "temperature_2m_max": 30,
      "temperature_2m_min": 15,
      "sunrise": "2025-08-29T06:48",
      "sunset": "2025-08-29T20:06",
      "daylight_duration": 47878.92,
      "uv_index_max": 6.65,
      "precipitation_probability_max": 0,
      "wind_speed_10m_max": 3.31,
      "precipitation_sum": 0,
      "wind_direction_10m_dominant": 95
    },
    "dayThree": {
      "date": "2025-08-30",
      "weather_code": 3,
      "temperature_2m_max": 32,
      "temperature_2m_min": 17,
      "sunrise": "2025-08-30T06:49",
      "sunset": "2025-08-30T20:04",
      "daylight_duration": 47713.32,
      "uv_index_max": 6.6,
      "precipitation_probability_max": 27,
      "wind_speed_10m_max": 5.26,
      "precipitation_sum": 0.7,
      "wind_direction_10m_dominant": 300
    },
    "dayFour": {
      "date": "2025-08-31",
      "weather_code": 80,
      "temperature_2m_max": 22,
      "temperature_2m_min": 18,
      "sunrise": "2025-08-31T06:50",
      "sunset": "2025-08-31T20:03",
      "daylight_duration": 47547.59,
      "uv_index_max": 5.1,
      "precipitation_probability_max": 68,
      "wind_speed_10m_max": 2.4,
      "precipitation_sum": 7.1,
      "wind_direction_10m_dominant": 58
    },
    "dayFive": {
      "date": "2025-09-01",
      "weather_code": 2,
      "temperature_2m_max": 26,
      "temperature_2m_min": 17,
      "sunrise": "2025-09-01T06:51",
      "sunset": "2025-09-01T20:01",
      "daylight_duration": 47381.84,
      "uv_index_max": 6.3,
      "precipitation_probability_max": 30,
      "wind_speed_10m_max": 1.28,
      "precipitation_sum": 0,
      "wind_direction_10m_dominant": 237
    },
    "daySix": {
      "date": "2025-09-02",
      "weather_code": 45,
      "temperature_2m_max": 30,
      "temperature_2m_min": 13,
      "sunrise": "2025-09-02T06:52",
      "sunset": "2025-09-02T19:59",
      "daylight_duration": 47216.16,
      "uv_index_max": 6.3,
      "precipitation_probability_max": 0,
      "wind_speed_10m_max": 2.62,
      "precipitation_sum": 0,
      "wind_direction_10m_dominant": 247
    }
  },
  "hourlyWeatherToday": {
    "2025-08-27T00:00": {
      "temperature_2m": 17,
      "apparent_temperature": 15,
      "precipitation_probability": 0,
      "weather_code": 1,
      "uv_index": 0,
      "wind_speed_10m": 0.63,
      "wind_direction_10m": 198,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T02:00": {
      "temperature_2m": 16,
      "apparent_temperature": 14,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 0,
      "wind_speed_10m": 0.2,
      "wind_direction_10m": 90,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T04:00": {
      "temperature_2m": 14,
      "apparent_temperature": 12,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 0,
      "wind_speed_10m": 0.14,
      "wind_direction_10m": 135,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T06:00": {
      "temperature_2m": 11,
      "apparent_temperature": 10,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 0,
      "wind_speed_10m": 0.14,
      "wind_direction_10m": 45,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T08:00": {
      "temperature_2m": 12,
      "apparent_temperature": 11,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 0.35,
      "wind_speed_10m": 0.3,
      "wind_direction_10m": 90,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T10:00": {
      "temperature_2m": 16,
      "apparent_temperature": 15,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 2.7,
      "wind_speed_10m": 0.57,
      "wind_direction_10m": 45,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T12:00": {
      "temperature_2m": 22,
      "apparent_temperature": 22,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 5.5,
      "wind_speed_10m": 0.72,
      "wind_direction_10m": 34,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T14:00": {
      "temperature_2m": 26,
      "apparent_temperature": 25,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 6.65,
      "wind_speed_10m": 1.13,
      "wind_direction_10m": 45,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T16:00": {
      "temperature_2m": 27,
      "apparent_temperature": 25,
      "precipitation_probability": 0,
      "weather_code": 3,
      "uv_index": 5.3,
      "wind_speed_10m": 1.2,
      "wind_direction_10m": 48,
      "cloud_cover": 53,
      "precipitation": 0
    },
    "2025-08-27T18:00": {
      "temperature_2m": 27,
      "apparent_temperature": 24,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 2.65,
      "wind_speed_10m": 2.28,
      "wind_direction_10m": 67,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T20:00": {
      "temperature_2m": 23,
      "apparent_temperature": 21,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 0.3,
      "wind_speed_10m": 1.75,
      "wind_direction_10m": 77,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T22:00": {
      "temperature_2m": 20,
      "apparent_temperature": 18,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 0,
      "wind_speed_10m": 1.44,
      "wind_direction_10m": 146,
      "cloud_cover": 0,
      "precipitation": 0
    }
  },
  "hourlyWeatherFutureDays": {
    "dayOne": {
      "2025-08-28T00:00": {
        "temperature_2m": 18,
        "apparent_temperature": 16,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 1.3,
        "wind_direction_10m": 122,
        "cloud_cover": 1,
        "precipitation": 0
      },
      "2025-08-28T02:00": {
        "temperature_2m": 16,
        "apparent_temperature": 15,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 1.46,
        "wind_direction_10m": 74,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-28T04:00": {
        "temperature_2m": 15,
        "apparent_temperature": 14,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 2.01,
        "wind_direction_10m": 84,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-28T06:00": {
        "temperature_2m": 15,
        "apparent_temperature": 14,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 1.51,
        "wind_direction_10m": 82,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-28T08:00": {
        "temperature_2m": 15,
        "apparent_temperature": 14,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0.35,
        "wind_speed_10m": 1.55,
        "wind_direction_10m": 75,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-28T10:00": {
        "temperature_2m": 19,
        "apparent_temperature": 17,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 2.7,
        "wind_speed_10m": 2.15,
        "wind_direction_10m": 68,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-28T12:00": {
        "temperature_2m": 24,
        "apparent_temperature": 23,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 5.5,
        "wind_speed_10m": 2.31,
        "wind_direction_10m": 85,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-28T14:00": {
        "temperature_2m": 27,
        "apparent_temperature": 27,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 6.65,
        "wind_speed_10m": 2.51,
        "wind_direction_10m": 85,
        "cloud_cover": 8,
        "precipitation": 0
      },
      "2025-08-28T16:00": {
        "temperature_2m": 28,
        "apparent_temperature": 27,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 5.45,
        "wind_speed_10m": 2.51,
        "wind_direction_10m": 85,
        "cloud_cover": 17,
        "precipitation": 0
      },
      "2025-08-28T18:00": {
        "temperature_2m": 28,
        "apparent_temperature": 25,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 2.65,
        "wind_speed_10m": 2.73,
        "wind_direction_10m": 114,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-28T20:00": {
        "temperature_2m": 24,
        "apparent_temperature": 22,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0.3,
        "wind_speed_10m": 3.02,
        "wind_direction_10m": 124,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-28T22:00": {
        "temperature_2m": 21,
        "apparent_temperature": 19,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 2.65,
        "wind_direction_10m": 101,
        "cloud_cover": 0,
        "precipitation": 0
      }
    },
    "dayTwo": {
      "2025-08-29T00:00": {
        "temperature_2m": 19,
        "apparent_temperature": 17,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 2.92,
        "wind_direction_10m": 96,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-29T02:00": {
        "temperature_2m": 18,
        "apparent_temperature": 16,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 2,
        "wind_direction_10m": 93,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-29T04:00": {
        "temperature_2m": 16,
        "apparent_temperature": 15,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 1.9,
        "wind_direction_10m": 93,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-29T06:00": {
        "temperature_2m": 15,
        "apparent_temperature": 15,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 1.4,
        "wind_direction_10m": 86,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-29T08:00": {
        "temperature_2m": 15,
        "apparent_temperature": 15,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0.35,
        "wind_speed_10m": 1.32,
        "wind_direction_10m": 81,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-29T10:00": {
        "temperature_2m": 19,
        "apparent_temperature": 18,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 2.7,
        "wind_speed_10m": 1.71,
        "wind_direction_10m": 69,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-29T12:00": {
        "temperature_2m": 24,
        "apparent_temperature": 24,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 5.5,
        "wind_speed_10m": 1.26,
        "wind_direction_10m": 72,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-29T14:00": {
        "temperature_2m": 28,
        "apparent_temperature": 30,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 6.65,
        "wind_speed_10m": 1.5,
        "wind_direction_10m": 86,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-29T16:00": {
        "temperature_2m": 30,
        "apparent_temperature": 30,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 5.4,
        "wind_speed_10m": 2.21,
        "wind_direction_10m": 95,
        "cloud_cover": 2,
        "precipitation": 0
      },
      "2025-08-29T18:00": {
        "temperature_2m": 29,
        "apparent_temperature": 28,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 2.6,
        "wind_speed_10m": 3.14,
        "wind_direction_10m": 112,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-29T20:00": {
        "temperature_2m": 26,
        "apparent_temperature": 25,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0.3,
        "wind_speed_10m": 2.56,
        "wind_direction_10m": 111,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-29T22:00": {
        "temperature_2m": 23,
        "apparent_temperature": 21,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 2.25,
        "wind_direction_10m": 111,
        "cloud_cover": 0,
        "precipitation": 0
      }
    },
    "dayThree": {
      "2025-08-30T00:00": {
        "temperature_2m": 21,
        "apparent_temperature": 19,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 1.87,
        "wind_direction_10m": 106,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-30T02:00": {
        "temperature_2m": 20,
        "apparent_temperature": 18,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 0.7,
        "wind_direction_10m": 90,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-30T04:00": {
        "temperature_2m": 18,
        "apparent_temperature": 17,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 0.22,
        "wind_direction_10m": 27,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-30T06:00": {
        "temperature_2m": 17,
        "apparent_temperature": 17,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 0.3,
        "wind_direction_10m": 360,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-30T08:00": {
        "temperature_2m": 18,
        "apparent_temperature": 17,
        "precipitation_probability": 0,
        "weather_code": 1,
        "uv_index": 0.3,
        "wind_speed_10m": 0.36,
        "wind_direction_10m": 34,
        "cloud_cover": 22,
        "precipitation": 0
      },
      "2025-08-30T10:00": {
        "temperature_2m": 21,
        "apparent_temperature": 20,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 2.7,
        "wind_speed_10m": 0.81,
        "wind_direction_10m": 7,
        "cloud_cover": 10,
        "precipitation": 0
      },
      "2025-08-30T12:00": {
        "temperature_2m": 27,
        "apparent_temperature": 26,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 5.45,
        "wind_speed_10m": 1.21,
        "wind_direction_10m": 66,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-08-30T14:00": {
        "temperature_2m": 31,
        "apparent_temperature": 31,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 6.6,
        "wind_speed_10m": 0.94,
        "wind_direction_10m": 58,
        "cloud_cover": 4,
        "precipitation": 0
      },
      "2025-08-30T16:00": {
        "temperature_2m": 32,
        "apparent_temperature": 32,
        "precipitation_probability": 2,
        "weather_code": 2,
        "uv_index": 5.35,
        "wind_speed_10m": 1.42,
        "wind_direction_10m": 321,
        "cloud_cover": 46,
        "precipitation": 0
      },
      "2025-08-30T18:00": {
        "temperature_2m": 30,
        "apparent_temperature": 28,
        "precipitation_probability": 7,
        "weather_code": 2,
        "uv_index": 1.45,
        "wind_speed_10m": 4.92,
        "wind_direction_10m": 294,
        "cloud_cover": 87,
        "precipitation": 0
      },
      "2025-08-30T20:00": {
        "temperature_2m": 24,
        "apparent_temperature": 23,
        "precipitation_probability": 14,
        "weather_code": 3,
        "uv_index": 0.1,
        "wind_speed_10m": 5,
        "wind_direction_10m": 271,
        "cloud_cover": 95,
        "precipitation": 0.1
      },
      "2025-08-30T22:00": {
        "temperature_2m": 21,
        "apparent_temperature": 21,
        "precipitation_probability": 22,
        "weather_code": 3,
        "uv_index": 0,
        "wind_speed_10m": 2.75,
        "wind_direction_10m": 260,
        "cloud_cover": 99,
        "precipitation": 0.2
      }
    },
    "dayFour": {
      "2025-08-31T00:00": {
        "temperature_2m": 21,
        "apparent_temperature": 22,
        "precipitation_probability": 33,
        "weather_code": 3,
        "uv_index": 0,
        "wind_speed_10m": 1.25,
        "wind_direction_10m": 61,
        "cloud_cover": 100,
        "precipitation": 0.2
      },
      "2025-08-31T02:00": {
        "temperature_2m": 20,
        "apparent_temperature": 21,
        "precipitation_probability": 43,
        "weather_code": 80,
        "uv_index": 0,
        "wind_speed_10m": 1.12,
        "wind_direction_10m": 10,
        "cloud_cover": 100,
        "precipitation": 0.2
      },
      "2025-08-31T04:00": {
        "temperature_2m": 19,
        "apparent_temperature": 21,
        "precipitation_probability": 52,
        "weather_code": 80,
        "uv_index": 0,
        "wind_speed_10m": 1.02,
        "wind_direction_10m": 11,
        "cloud_cover": 100,
        "precipitation": 0.3
      },
      "2025-08-31T06:00": {
        "temperature_2m": 18,
        "apparent_temperature": 20,
        "precipitation_probability": 61,
        "weather_code": 80,
        "uv_index": 0,
        "wind_speed_10m": 1.49,
        "wind_direction_10m": 70,
        "cloud_cover": 100,
        "precipitation": 0.3
      },
      "2025-08-31T08:00": {
        "temperature_2m": 18,
        "apparent_temperature": 20,
        "precipitation_probability": 67,
        "weather_code": 3,
        "uv_index": 0.05,
        "wind_speed_10m": 0.91,
        "wind_direction_10m": 6,
        "cloud_cover": 100,
        "precipitation": 0
      },
      "2025-08-31T10:00": {
        "temperature_2m": 19,
        "apparent_temperature": 20,
        "precipitation_probability": 68,
        "weather_code": 3,
        "uv_index": 2.35,
        "wind_speed_10m": 1,
        "wind_direction_10m": 360,
        "cloud_cover": 100,
        "precipitation": 0.9
      },
      "2025-08-31T12:00": {
        "temperature_2m": 19,
        "apparent_temperature": 20,
        "precipitation_probability": 65,
        "weather_code": 3,
        "uv_index": 4.15,
        "wind_speed_10m": 1.52,
        "wind_direction_10m": 67,
        "cloud_cover": 100,
        "precipitation": 0.9
      },
      "2025-08-31T14:00": {
        "temperature_2m": 21,
        "apparent_temperature": 21,
        "precipitation_probability": 60,
        "weather_code": 3,
        "uv_index": 3.9,
        "wind_speed_10m": 2.3,
        "wind_direction_10m": 88,
        "cloud_cover": 100,
        "precipitation": 0.2
      },
      "2025-08-31T16:00": {
        "temperature_2m": 22,
        "apparent_temperature": 23,
        "precipitation_probability": 57,
        "weather_code": 1,
        "uv_index": 3.85,
        "wind_speed_10m": 1.9,
        "wind_direction_10m": 93,
        "cloud_cover": 90,
        "precipitation": 0.3
      },
      "2025-08-31T18:00": {
        "temperature_2m": 22,
        "apparent_temperature": 24,
        "precipitation_probability": 56,
        "weather_code": 1,
        "uv_index": 2.4,
        "wind_speed_10m": 0.22,
        "wind_direction_10m": 117,
        "cloud_cover": 71,
        "precipitation": 0.3
      },
      "2025-08-31T20:00": {
        "temperature_2m": 21,
        "apparent_temperature": 23,
        "precipitation_probability": 53,
        "weather_code": 3,
        "uv_index": 0.1,
        "wind_speed_10m": 0.94,
        "wind_direction_10m": 238,
        "cloud_cover": 90,
        "precipitation": 0.4
      },
      "2025-08-31T22:00": {
        "temperature_2m": 20,
        "apparent_temperature": 21,
        "precipitation_probability": 45,
        "weather_code": 1,
        "uv_index": 0,
        "wind_speed_10m": 1.08,
        "wind_direction_10m": 236,
        "cloud_cover": 83,
        "precipitation": 0
      }
    },
    "dayFive": {
      "2025-09-01T00:00": {
        "temperature_2m": 19,
        "apparent_temperature": 20,
        "precipitation_probability": 30,
        "weather_code": 1,
        "uv_index": 0,
        "wind_speed_10m": 0.5,
        "wind_direction_10m": 217,
        "cloud_cover": 50,
        "precipitation": 0
      },
      "2025-09-01T02:00": {
        "temperature_2m": 18,
        "apparent_temperature": 19,
        "precipitation_probability": 15,
        "weather_code": 2,
        "uv_index": 0,
        "wind_speed_10m": 0.85,
        "wind_direction_10m": 225,
        "cloud_cover": 45,
        "precipitation": 0
      },
      "2025-09-01T04:00": {
        "temperature_2m": 17,
        "apparent_temperature": 18,
        "precipitation_probability": 6,
        "weather_code": 2,
        "uv_index": 0,
        "wind_speed_10m": 1.13,
        "wind_direction_10m": 225,
        "cloud_cover": 44,
        "precipitation": 0
      },
      "2025-09-01T06:00": {
        "temperature_2m": 17,
        "apparent_temperature": 18,
        "precipitation_probability": 3,
        "weather_code": 2,
        "uv_index": 0,
        "wind_speed_10m": 1.14,
        "wind_direction_10m": 218,
        "cloud_cover": 47,
        "precipitation": 0
      },
      "2025-09-01T08:00": {
        "temperature_2m": 18,
        "apparent_temperature": 20,
        "precipitation_probability": 1,
        "weather_code": 1,
        "uv_index": 0.1,
        "wind_speed_10m": 0.14,
        "wind_direction_10m": 315,
        "cloud_cover": 53,
        "precipitation": 0
      },
      "2025-09-01T10:00": {
        "temperature_2m": 18,
        "apparent_temperature": 20,
        "precipitation_probability": 0,
        "weather_code": 1,
        "uv_index": 1.5,
        "wind_speed_10m": 0.45,
        "wind_direction_10m": 333,
        "cloud_cover": 66,
        "precipitation": 0
      },
      "2025-09-01T12:00": {
        "temperature_2m": 22,
        "apparent_temperature": 23,
        "precipitation_probability": 0,
        "weather_code": 1,
        "uv_index": 4,
        "wind_speed_10m": 0.41,
        "wind_direction_10m": 346,
        "cloud_cover": 43,
        "precipitation": 0
      },
      "2025-09-01T14:00": {
        "temperature_2m": 24,
        "apparent_temperature": 26,
        "precipitation_probability": 0,
        "weather_code": 1,
        "uv_index": 5.95,
        "wind_speed_10m": 0.73,
        "wind_direction_10m": 286,
        "cloud_cover": 40,
        "precipitation": 0
      },
      "2025-09-01T16:00": {
        "temperature_2m": 26,
        "apparent_temperature": 27,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 5.85,
        "wind_speed_10m": 1,
        "wind_direction_10m": 276,
        "cloud_cover": 26,
        "precipitation": 0
      },
      "2025-09-01T18:00": {
        "temperature_2m": 26,
        "apparent_temperature": 27,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 3.8,
        "wind_speed_10m": 0.81,
        "wind_direction_10m": 263,
        "cloud_cover": 0,
        "precipitation": 0
      },
      "2025-09-01T20:00": {
        "temperature_2m": 24,
        "apparent_temperature": 25,
        "precipitation_probability": 0,
        "weather_code": 1,
        "uv_index": 1.4,
        "wind_speed_10m": 0.8,
        "wind_direction_10m": 180,
        "cloud_cover": 5,
        "precipitation": 0
      },
      "2025-09-01T22:00": {
        "temperature_2m": 21,
        "apparent_temperature": 22,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0.05,
        "wind_speed_10m": 1,
        "wind_direction_10m": 186,
        "cloud_cover": 6,
        "precipitation": 0
      }
    },
    "daySix": {
      "2025-09-02T00:00": {
        "temperature_2m": 17,
        "apparent_temperature": 18,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0,
        "wind_speed_10m": 1.25,
        "wind_direction_10m": 241,
        "cloud_cover": 3,
        "precipitation": 0
      },
      "2025-09-02T02:00": {
        "temperature_2m": 15,
        "apparent_temperature": 15,
        "precipitation_probability": 0,
        "weather_code": 45,
        "uv_index": 0,
        "wind_speed_10m": 1.21,
        "wind_direction_10m": 246,
        "cloud_cover": 36,
        "precipitation": 0
      },
      "2025-09-02T04:00": {
        "temperature_2m": 13,
        "apparent_temperature": 13,
        "precipitation_probability": 0,
        "weather_code": 45,
        "uv_index": 0,
        "wind_speed_10m": 1.14,
        "wind_direction_10m": 255,
        "cloud_cover": 56,
        "precipitation": 0
      },
      "2025-09-02T06:00": {
        "temperature_2m": 13,
        "apparent_temperature": 13,
        "precipitation_probability": 0,
        "weather_code": 45,
        "uv_index": 0,
        "wind_speed_10m": 1.12,
        "wind_direction_10m": 260,
        "cloud_cover": 63,
        "precipitation": 0
      },
      "2025-09-02T08:00": {
        "temperature_2m": 15,
        "apparent_temperature": 16,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0.1,
        "wind_speed_10m": 0.9,
        "wind_direction_10m": 270,
        "cloud_cover": 21,
        "precipitation": 0
      },
      "2025-09-02T10:00": {
        "temperature_2m": 19,
        "apparent_temperature": 21,
        "precipitation_probability": 0,
        "weather_code": 1,
        "uv_index": 1.5,
        "wind_speed_10m": 0.9,
        "wind_direction_10m": 270,
        "cloud_cover": 9,
        "precipitation": 0
      },
      "2025-09-02T12:00": {
        "temperature_2m": 25,
        "apparent_temperature": 27,
        "precipitation_probability": 0,
        "weather_code": 1,
        "uv_index": 4.05,
        "wind_speed_10m": 1.12,
        "wind_direction_10m": 260,
        "cloud_cover": 27,
        "precipitation": 0
      },
      "2025-09-02T14:00": {
        "temperature_2m": 29,
        "apparent_temperature": 30,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 5.95,
        "wind_speed_10m": 2.12,
        "wind_direction_10m": 251,
        "cloud_cover": 9,
        "precipitation": 0
      },
      "2025-09-02T16:00": {
        "temperature_2m": 30,
        "apparent_temperature": 31,
        "precipitation_probability": 0,
        "weather_code": 1,
        "uv_index": 5.9,
        "wind_speed_10m": 2.61,
        "wind_direction_10m": 238,
        "cloud_cover": 10,
        "precipitation": 0
      },
      "2025-09-02T18:00": {
        "temperature_2m": 30,
        "apparent_temperature": 30,
        "precipitation_probability": 0,
        "weather_code": 1,
        "uv_index": 3.9,
        "wind_speed_10m": 2.48,
        "wind_direction_10m": 223,
        "cloud_cover": 29,
        "precipitation": 0
      },
      "2025-09-02T20:00": {
        "temperature_2m": 26,
        "apparent_temperature": 27,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 1.4,
        "wind_speed_10m": 1.44,
        "wind_direction_10m": 236,
        "cloud_cover": 10,
        "precipitation": 0
      },
      "2025-09-02T22:00": {
        "temperature_2m": 21,
        "apparent_temperature": 23,
        "precipitation_probability": 0,
        "weather_code": 0,
        "uv_index": 0.05,
        "wind_speed_10m": 1.1,
        "wind_direction_10m": 265,
        "cloud_cover": 0,
        "precipitation": 0
      }
    }
  }
}
`;

const todayWeatherJSON = `
{
  "currentWeather": {
    "time": "2025-08-27T16:45",
    "temperature_2m": 27,
    "relative_humidity_2m": 23,
    "apparent_temperature": 25,
    "precipitation": 0,
    "weather_code": 3,
    "cloud_cover": 53,
    "surface_pressure": 953.8,
    "wind_speed_10m": 1.44,
    "wind_direction_10m": 56
  },
  "dailyWeatherToday": {
    "date": "2025-08-27",
    "weather_code": 3,
    "temperature_2m_max": 27,
    "temperature_2m_min": 11,
    "sunrise": "2025-08-27T06:46",
    "sunset": "2025-08-27T20:09",
    "daylight_duration": 48209.31,
    "uv_index_max": 6.65,
    "precipitation_probability_max": 0,
    "wind_speed_10m_max": 2.95,
    "precipitation_sum": 0,
    "wind_direction_10m_dominant": 76
  },
  "hourlyWeatherToday": {
    "2025-08-27T00:00": {
      "temperature_2m": 17,
      "apparent_temperature": 15,
      "precipitation_probability": 0,
      "weather_code": 1,
      "uv_index": 0,
      "wind_speed_10m": 0.63,
      "wind_direction_10m": 198,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T02:00": {
      "temperature_2m": 16,
      "apparent_temperature": 14,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 0,
      "wind_speed_10m": 0.2,
      "wind_direction_10m": 90,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T04:00": {
      "temperature_2m": 14,
      "apparent_temperature": 12,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 0,
      "wind_speed_10m": 0.14,
      "wind_direction_10m": 135,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T06:00": {
      "temperature_2m": 11,
      "apparent_temperature": 10,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 0,
      "wind_speed_10m": 0.14,
      "wind_direction_10m": 45,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T08:00": {
      "temperature_2m": 12,
      "apparent_temperature": 11,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 0.35,
      "wind_speed_10m": 0.3,
      "wind_direction_10m": 90,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T10:00": {
      "temperature_2m": 16,
      "apparent_temperature": 15,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 2.7,
      "wind_speed_10m": 0.57,
      "wind_direction_10m": 45,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T12:00": {
      "temperature_2m": 22,
      "apparent_temperature": 22,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 5.5,
      "wind_speed_10m": 0.72,
      "wind_direction_10m": 34,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T14:00": {
      "temperature_2m": 26,
      "apparent_temperature": 25,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 6.65,
      "wind_speed_10m": 1.13,
      "wind_direction_10m": 45,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T16:00": {
      "temperature_2m": 27,
      "apparent_temperature": 25,
      "precipitation_probability": 0,
      "weather_code": 3,
      "uv_index": 5.3,
      "wind_speed_10m": 1.2,
      "wind_direction_10m": 48,
      "cloud_cover": 53,
      "precipitation": 0
    },
    "2025-08-27T18:00": {
      "temperature_2m": 27,
      "apparent_temperature": 24,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 2.65,
      "wind_speed_10m": 2.28,
      "wind_direction_10m": 67,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T20:00": {
      "temperature_2m": 23,
      "apparent_temperature": 21,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 0.3,
      "wind_speed_10m": 1.75,
      "wind_direction_10m": 77,
      "cloud_cover": 0,
      "precipitation": 0
    },
    "2025-08-27T22:00": {
      "temperature_2m": 20,
      "apparent_temperature": 18,
      "precipitation_probability": 0,
      "weather_code": 0,
      "uv_index": 0,
      "wind_speed_10m": 1.44,
      "wind_direction_10m": 146,
      "cloud_cover": 0,
      "precipitation": 0
    }
  }
}
`;

const locationsJSON = `
[
  {
    "name": "Sofia",
    "latitude": 42.69751,
    "longitude": 23.32415,
    "country_code": "BG",
    "timezone": "Europe/Sofia",
    "admin1": "Sofia-grad"
  },
  {
    "name": "Sofia Airport",
    "latitude": 42.69519,
    "longitude": 23.40617,
    "country_code": "BG",
    "timezone": "Europe/Sofia",
    "admin1": "Sofia-grad"
  },
  {
    "name": "Safu",
    "latitude": -7.24098,
    "longitude": 38.65194,
    "country_code": "TZ",
    "timezone": "Africa/Dar_es_Salaam",
    "admin1": "Pwani"
  },
  {
    "name": "Sofi",
    "latitude": -8.96667,
    "longitude": 36.3,
    "country_code": "TZ",
    "timezone": "Africa/Dar_es_Salaam",
    "admin1": "Morogoro"
  },
  {
    "name": "Sofó",
    "latitude": 39.46955,
    "longitude": 22.49967,
    "country_code": "GR",
    "timezone": "Europe/Athens",
    "admin1": "Thessaly"
  },
  {
    "name": "Sofu",
    "latitude": 39.44975,
    "longitude": 29.89669,
    "country_code": "TR",
    "timezone": "Europe/Istanbul",
    "admin1": "Kütahya"
  },
  {
    "name": "Sofe",
    "latitude": 6.61667,
    "longitude": 37.66667,
    "country_code": "ET",
    "timezone": "Africa/Addis_Ababa",
    "admin1": "South Ethiopia Regional State"
  },
  {
    "name": "Sofu",
    "latitude": 41.86667,
    "longitude": 34.56667,
    "country_code": "TR",
    "timezone": "Europe/Istanbul",
    "admin1": "Sinop"
  },
  {
    "name": "Sofu",
    "latitude": 41.78333,
    "longitude": 34.68333,
    "country_code": "TR",
    "timezone": "Europe/Istanbul",
    "admin1": "Sinop"
  },
  {
    "name": "Sofa",
    "latitude": -8.50667,
    "longitude": 126.83389,
    "country_code": "TL",
    "timezone": "Asia/Dili",
    "admin1": "Lautém"
  },
  {
    "name": "Sofa",
    "latitude": 6.3845,
    "longitude": 0.64274,
    "country_code": "GH",
    "timezone": "Africa/Accra",
    "admin1": "Volta Region"
  },
  {
    "name": "Sofa",
    "latitude": 12.46667,
    "longitude": -13.63333,
    "country_code": "GN",
    "timezone": "Africa/Conakry",
    "admin1": "Boké Region"
  },
  {
    "name": "Sofa",
    "latitude": 13.63258,
    "longitude": 15.83559,
    "country_code": "TD",
    "timezone": "Africa/Ndjamena",
    "admin1": "Kanem"
  },
  {
    "name": "Sofa",
    "latitude": 14.5897,
    "longitude": -9.8378,
    "country_code": "ML",
    "timezone": "Africa/Bamako",
    "admin1": "Kayes"
  },
  {
    "name": "Sofo",
    "latitude": 6.20667,
    "longitude": 1.35611,
    "country_code": "TG",
    "timezone": "Africa/Lome",
    "admin1": "Maritime"
  },
  {
    "name": "Sofa",
    "latitude": 54.96254,
    "longitude": 25.15104,
    "country_code": "LT",
    "timezone": "Europe/Vilnius",
    "admin1": "Vilnius"
  },
  {
    "name": "Sofa",
    "latitude": 13.01187,
    "longitude": -6.31835,
    "country_code": "ML",
    "timezone": "Africa/Bamako",
    "admin1": "Ségou"
  },
  {
    "name": "Sofifi",
    "latitude": 0.73729,
    "longitude": 127.5588,
    "country_code": "ID",
    "timezone": "Asia/Jayapura",
    "admin1": "North Maluku"
  },
  {
    "name": "Sôfe",
    "latitude": 11.06139,
    "longitude": 42.7075,
    "country_code": "DJ",
    "timezone": "Africa/Djibouti"
  },
  {
    "name": "Sófre",
    "latitude": 8.61881,
    "longitude": -80.21893,
    "country_code": "PA",
    "timezone": "America/Panama",
    "admin1": "Provincia de Coclé"
  }
]
`;

const astrologyJSON = `
[
  {
    "moonPhase": "waxing-crescent",
    "zodiacSign": "virgo"
  },
  {
    "moonPhase": "waxing-crescent",
    "zodiacSign": "virgo"
  },
  {
    "moonPhase": "waxing-crescent",
    "zodiacSign": "virgo"
  },
  {
    "moonPhase": "waxing-crescent",
    "zodiacSign": "virgo"
  },
  {
    "moonPhase": "waxing-gibbous",
    "zodiacSign": "virgo"
  },
  {
    "moonPhase": "waxing-gibbous",
    "zodiacSign": "virgo"
  },
  {
    "moonPhase": "waxing-gibbous",
    "zodiacSign": "virgo"
  }
]
`

const weatherData = JSON.parse(weatherJSON);
const todayWeatherData = JSON.parse(todayWeatherJSON);
const locationsData = JSON.parse(locationsJSON);
const astrologyData = JSON.parse(astrologyJSON);

export {weatherData, todayWeatherData, locationsData, astrologyData};