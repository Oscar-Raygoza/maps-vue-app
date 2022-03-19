import { computed, ComputedRef, onMounted } from "vue";
import { useStore } from "vuex";
import { StateInterface } from "../store";

export interface IComposableUsePlacesStore {
  isLoading: ComputedRef<boolean>;
  userLocation?: ComputedRef<[number, number] | undefined>; // [latitude, longitude] or undefined
  isUserLocationReady: ComputedRef<boolean>; // [latitude, longitude] or undefined
}

export const usePlacesStore = (): IComposableUsePlacesStore => {
  const store = useStore<StateInterface>();
  onMounted(() => {
    if (!store.getters["places/isUserLocationReady"]) {
      store.dispatch("places/getInitialLocation");
    }
  });

  return {
    // state
    isLoading: computed(() => store.state.places.isLoading),
    userLocation: computed(() => store.state.places.userLocation),

    // getters
    isUserLocationReady: computed(() => store.getters["places/isUserLocationReady"])
    // actions
   
    // mutations
  }
};
