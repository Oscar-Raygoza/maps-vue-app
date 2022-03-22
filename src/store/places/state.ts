import { Feature } from "@/interfaces/places";

export interface IPlacesState {
  isLoading: boolean;
  isLoadingPlaces: boolean;
  places: Feature[];
  userLocation?: [number, number]; // [latitude, longitude]
}

function state(): IPlacesState {
  return {
    isLoading: true,
    isLoadingPlaces: false,
    places: [],
    userLocation: undefined,
  };
}

export default state;
