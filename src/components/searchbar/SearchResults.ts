import { computed, defineComponent, ref, watch } from "vue";
import { useMapStore, usePlacesStore } from "@/composables";

import { Profile } from "@/store/map/actions";

/**
 * FontAwesomeIcon
 */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowRight);

/**
 * Icons
 */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { Stretch as Spinner } from "vue-loading-spinner";
import { Feature } from "@/interfaces/PlacesResponse";

export default defineComponent({
  name: "SearchResults",
  components: {
    FontAwesomeIcon,
    Spinner,
  },
  setup() {
    const { isUserLocationReady, isLoadingPlaces, places, userLocation, setPlaceSelected } =
      usePlacesStore();
    const { setPlacesMarket, getRouteBetweenPoints, map, isMapReady } =
      useMapStore();

    const activePlace = ref("");

    watch(places, (newPlaces) => {
      activePlace.value = "";
      console.log(newPlaces);
      setPlacesMarket(newPlaces);
    });

    return {
      isButtonReady: computed<boolean>(
        () => isUserLocationReady.value && isMapReady.value
      ),
      onClickPlace: (place: Feature) => {
        const [lng, lat] = place.center;

        map.value?.flyTo({
          center: [lng, lat],
          zoom: 15,
        });
      },
      onClickDirection: (place: Feature) => {
        if (!userLocation.value) return;

        const [lng, lat] = place.center;

        const [startLng, startLat] = userLocation.value;

        const start: [number, number] = [startLng, startLat];
        const end: [number, number] = [lng, lat];
        setPlaceSelected(place);
        getRouteBetweenPoints(start, end, Profile.DRIVING); //default init route

        // Todo: vuex create profile state && set profile state ✅ 
      },
      isLoadingPlaces,
      places,
      activePlace,
    };
  },
});
