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
};

export default mutation;
