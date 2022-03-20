import { ActionTree } from "vuex";
import { IPlacesState } from "./state";
import { StateInterface } from "../index";

const actions: ActionTree<IPlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    // a line to prevent linter errors
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      console.log({ coords });
      commit("setInitialLocation", {
        lng: coords.longitude,
        lat: coords.latitude,
      }),
        (err: string) => {
          throw new Error(err);
        };
    });
  },
};

export default actions;
