import axios from "axios";

// export const getPlacesData = async (type, sw, ne) => {
//   try {
// const {
//   data: { data },
// } = await axios.get(
//   `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
//   {
//     params: {
//       bl_latitude: sw.lat,
//       bl_longitude: sw.lng,
//       tr_longitude: ne.lng,
//       tr_latitude: ne.lat,
//     },
//     headers: {
//       "x-rapidapi-key": process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
//       "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//     },
//   }
// );

// return data;
// } catch (error) {
//   console.log(error);
//   }
// };

// export const getWeatherData = async (lat, lng) => {
//   try {
//     if (lat && lng) {
//       const { data } = await axios.get(
//         "https://community-open-weather-map.p.rapidapi.com/find",
//         {
//           params: { lat, lon: lng },
//           headers: {
//             "x-rapidapi-key":
//               "81e6d1d03cmshb022a43067fd852p13a1d7jsn5262298ee447",
//             "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
//           },
//         }
//       );

//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const options = {
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//   },
//   headers: {
//     "X-RapidAPI-Key": "81e6d1d03cmshb022a43067fd852p13a1d7jsn5262298ee447",
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//   },
// };

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "X-RapidAPI-Key":
            "81e6d1d03cmshb022a43067fd852p13a1d7jsn5262298ee447",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getWeatherData = async (lat, lng) => {
//   try {
//     if (lat && lng) {
//       const { data } = await axios.get(
//         "https://bestweather.p.rapidapi.com/weather/lat,lng/today",
//         {
//           params: { lat, lon: lng },
//           headers: {
//             "X-RapidAPI-Key":
//               "81e6d1d03cmshb022a43067fd852p13a1d7jsn5262298ee447",
//             "X-RapidAPI-Host": "bestweather.p.rapidapi.com",
//           },
//         }
//       );
//       console.log(data);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
