import { GetterTree } from "vuex";
import { IPlacesState } from "./state";
import { StateInterface } from "../index";

const getters: GetterTree<IPlacesState, StateInterface> = {
  isUserLocationReady(state) {
    return !!state.userLocation;
  },
};

export default getters;
