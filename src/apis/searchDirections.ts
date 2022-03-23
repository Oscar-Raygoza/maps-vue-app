import axios from "axios";

const BASE_URL_MAP_API = "https://api.mapbox.com/directions/v5/mapbox";

const searchDirectionsAPI = axios.create({
  baseURL: BASE_URL_MAP_API,
  params: {
    access_token:
      "pk.eyJ1Ijoib3NjYXJyYXlnb3phIiwiYSI6ImNsMHlkZGphbTF6dHUzY3Brdjh4bW80c3EifQ.129PXQKAXa2Ls5UFHH5Rog",
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
  },
});

export default searchDirectionsAPI;
