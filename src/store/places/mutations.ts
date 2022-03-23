import { Feature } from "@/interfaces/PlacesResponse";
import { MutationTree } from "vuex";
import { PlacesState } from "./state";

const mutation: MutationTree<PlacesState> = {
  setInitialLocation(
    state: PlacesState,
    { lng, lat }: { lng: number; lat: number }
  ) {
    state.userLocation = [lng, lat];
    // a line to prevent linter errors
  },
  setIsLoadingPlaces(state: PlacesState) {
    state.isLoadingPlaces = true;
  },
  setPlaces(state: PlacesState, places: Feature[]) {
    state.places = places;
    state.isLoadingPlaces = false;
  },
  setPlaceSelected(state: PlacesState, place: Feature) {
    state.placeSelected = place;
  },
};

export default mutation;
