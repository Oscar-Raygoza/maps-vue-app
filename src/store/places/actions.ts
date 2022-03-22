import { ActionTree } from "vuex";
import { IPlacesState } from "./state";
import { StateInterface } from "../index";
import { searchPlacesAPI } from "@/apis";

import { Feature, PlacesResponse } from "@/interfaces/places";
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
  async searchPlaces({ commit, state }, query: string): Promise<Feature[]> {
    console.log("vuex: ", query);
    if (query.length < 3) {
      commit("setPlaces", []);
      return [];
    }

    if (!state.userLocation) throw new Error("userLocation is not ready");

    commit("setIsLoadingPlaces");
    
    const response = await searchPlacesAPI.get<PlacesResponse>(
      `/${query}.json`
    );

    commit("setPlaces", response.data.features);

    return response.data.features;
  },
};

export default actions;
