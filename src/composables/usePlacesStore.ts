import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { StateInterface } from "@/store/index";
import { Feature } from "@/interfaces/PlacesResponse";

export const usePlacesStore = () => {
  const store = useStore<StateInterface>();

  onMounted(() => {
    if (!store.getters["places/isUserLocationReady"]) {
      store.dispatch("places/getInitialLocation");
      console.log(store);
    }
  });

  console.log(store.getters);
  return {
    // State
    isLoading: computed(() => store.state.places.isLoading),
    isLoadingPlaces: computed(() => store.state.places.isLoadingPlaces),
    places: computed(() => store.state.places.places),
    getPlaceSelected: computed(() => store.state.places.placeSelected),
    userLocation: computed(() => store.state.places.userLocation),

    isUserLocationReady: computed(
      () => store.getters["places/isUserLocationReady"]
    ),
    // Getters

    // Mutations
    setPlaceSelected: (place: Feature) => store.commit("places/setPlaceSelected", place),

    // Actions
    searchPlaces: (query: string) =>
      store.dispatch("places/searchPlaces", query),
    // Mutations
  };
};
