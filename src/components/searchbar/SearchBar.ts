import { computed, defineComponent, onMounted } from "vue";
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
  name: "SearchBar",
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const { userLocation, isUserLocationReady } = usePlacesStore();
    const { map, isMapReady } = useMapStore();

    onMounted(() => {
      //
    });

    return {
      isButtonReady: computed<boolean>(
        () => isUserLocationReady.value && isMapReady.value
      ),
      onClick: () => {
        console.log("click search bar");
      },
    };
  },
});
