import { computed } from "vue";
import { useStore } from "vuex";
import { StateInterface } from "@/store";

import Mapboxgl from "mapbox-gl";
import { Feature } from "@/interfaces/PlacesResponse";
import { LngLat } from "@/store/map/actions";
import { Profile } from "@/store/map/actions";

export const useMapStore = () => {
  const store = useStore<StateInterface>();

  return {
    map: computed(() => store.state.map.map),
    distance: computed(() => store.state.map.distance),
    duration: computed(() => store.state.map.duration),
    profile: computed(() => store.state.map.profile),
    isLoadingRoute: computed(() => store.state.map.isLoadingRoute),

    // Getters
    isMapReady: computed<boolean>(() => store.getters["map/isMapReady"]),

    // Mutations
    setMap: (map: Mapboxgl.Map) => store.commit("map/setMap", map),
    setPlacesMarket: (places: Feature[]) =>
      store.commit("map/setPlacesMarket", places),
    // Actions
    getRouteBetweenPoints: (start: LngLat, end: LngLat, profile: Profile) =>
      store.dispatch("map/getRouteBetweenPoints", { start, end, profile }),
  };
};
