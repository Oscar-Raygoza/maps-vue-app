import { computed, defineComponent, ref, watch } from "vue";
import { useMapStore, usePlacesStore } from "@/composables";

/**
 * FontAwesomeIcon
 */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLocationCrosshairs,
  faCar,
  faPersonWalking,
  faBicycle,
  faTrafficLight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faLocationCrosshairs,
  faCar,
  faPersonWalking,
  faBicycle,
  faTrafficLight
);

/**
 * Icons
 */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Profile } from "@/store/map/actions";

export default defineComponent({
  name: "TripDetails",
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const { isUserLocationReady, userLocation, getPlaceSelected } =
      usePlacesStore();
    const { duration, distance, profile, isMapReady, getRouteBetweenPoints } =
      useMapStore();

    return {
      isButtonReady: computed<boolean>(
        () => isUserLocationReady.value && isMapReady.value
      ),
      handleClick: (moveIn: Profile) => {
        if (!userLocation.value) return;
        if (!getPlaceSelected.value)
          throw new Error("No esta seleccionada ni una ruta 🚴");

        const [lng, lat] = getPlaceSelected.value?.center;

        const [startLng, startLat] = userLocation.value;

        const start: [number, number] = [startLng, startLat];
        const end: [number, number] = [lng, lat];

        getRouteBetweenPoints(start, end, moveIn);
      },
      distance,
      duration,
      Profile,
      profile
    };
  },
});
