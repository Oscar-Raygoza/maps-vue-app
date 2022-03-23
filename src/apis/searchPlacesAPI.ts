import axios from "axios";

const BASE_URL_MAP_API = "https://api.mapbox.com/geocoding/v5/mapbox.places";

const searchPlacesAPI = axios.create({
  baseURL: BASE_URL_MAP_API,
  params: {
    access_token:
      "pk.eyJ1Ijoib3NjYXJyYXlnb3phIiwiYSI6ImNsMHlkZGphbTF6dHUzY3Brdjh4bW80c3EifQ.129PXQKAXa2Ls5UFHH5Rog",
    language: "es",
    limit: 3,
  },
});

export default searchPlacesAPI;
