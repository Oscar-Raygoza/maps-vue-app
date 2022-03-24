import { ActionTree } from "vuex";
import { MapState } from "./state";
import { StateInterface } from "../index";
import { searchDirectionsAPI } from "@/apis";

import { DirectionsResponse } from "@/interfaces/DirectionsResponse";
export type LngLat = [number, number];

export enum Profile {
  TRAFFIC = "traffic",
  DRIVING = "driving",
  WALKING = "walking",
  CYCLING = "cycling",
}

const actions: ActionTree<MapState, StateInterface> = {
  async getRouteBetweenPoints(
    { commit },
    { start, end, profile }: { start: LngLat; end: LngLat; profile: Profile }
  ) {
    commit("setIsLoadingRoute", true);
    const request = await searchDirectionsAPI
      .get<DirectionsResponse>(
        `/${profile}/${start.join(",")};${end.join(",")}`
      )
      .then((response) => {
        const coordinates = response.data.routes[0].geometry.coordinates;
        const distance = response.data.routes[0].distance;
        const duration = response.data.routes[0].duration;
        
        commit("setIsLoadingRoute", false);
        commit("setDistanceDurationRoute", {
          distance,
          duration,
          profile,
        });
        commit("setRoutePolyline", coordinates);
      });
  },
};

export default actions;
