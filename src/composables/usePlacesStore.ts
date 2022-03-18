import { onMounted } from "vue";
import { useStore } from "vuex";
import { IPlacesState } from "../store/places/state";



export const usePlacesStore = () => {
    const store = useStore<IPlacesState>(); 
    
    onMounted(() => {
        if(!store.getters['places/isUserLocationReady']) {
            store.dispatch('places/getInitialLocation');
        }
    });

  return {};
};
