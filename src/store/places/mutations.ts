import { Feature } from "@/interfaces/places";
import { MutationTree } from "vuex";
import { IPlacesState } from "./state";


const mutation: MutationTree<IPlacesState> = {
  setInitialLocation(
    state: IPlacesState,
    { lng, lat }: { lng: number; lat: number }
  ) {
    state.userLocation = [lng, lat];
    // a line to prevent linter errors
  },
  setIsLoadingPlaces(state: IPlacesState) {
    state.isLoadingPlaces = true;
  },
  setPlaces(state: IPlacesState, places: Feature[]) {
    state.places = places;
    state.isLoadingPlaces = false;
  },


};

export default mutation;
