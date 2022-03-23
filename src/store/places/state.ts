import { Feature } from "@/interfaces/PlacesResponse";

export interface PlacesState {
  isLoading: boolean;
  isLoadingPlaces: boolean;
  places: Feature[];
  userLocation?: [number, number]; // [latitude, longitude]
  placeSelected?: Feature
}

function state(): PlacesState {
  return {
    isLoading: true,
    isLoadingPlaces: false,
    places: [],
    userLocation: undefined,
    placeSelected: undefined
  };
}

export default state;
