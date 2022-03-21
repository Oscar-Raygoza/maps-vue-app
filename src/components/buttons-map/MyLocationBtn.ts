import { computed, defineComponent } from "vue";
import { useMapStore, usePlacesStore } from "@/composables";

/**
 * FontAwesomeIcon
 */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

library.add(faLocationCrosshairs);

/**
 * Icons
 */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
  name: "MyLoactionBtn",
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const { userLocation, isUserLocationReady } = usePlacesStore();
    const { map, isMapReady } = useMapStore();

    return {
      isButtonReady: computed<boolean>(
        () => isUserLocationReady.value && isMapReady.value
      ),
      onClick: () => {
        map.value?.flyTo({
          center: userLocation.value,
          zoom: 15,
        });
      },
    };
  },
});
