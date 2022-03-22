import { computed, defineComponent, onMounted, ref } from "vue";
import { useMapStore, usePlacesStore } from "@/composables";

/**
 * Components
 */
import SearchResults from "@/components/searchbar/SearchResults.vue";

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
    SearchResults,
  },
  setup() {
    const { userLocation, isUserLocationReady, searchPlaces } = usePlacesStore();
    const { map, isMapReady } = useMapStore();

    const debouncedSearchTiemeOut = ref();
    const debouncedSearchValue = ref();

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
      searchQuery: computed({
        get() {
          return debouncedSearchValue.value;
        },
        set(val: string) {
          if (debouncedSearchTiemeOut.value)
            clearTimeout(debouncedSearchTiemeOut.value);

          debouncedSearchTiemeOut.value = setTimeout(() => {
            debouncedSearchValue.value = val;
            searchPlaces(debouncedSearchValue.value);
          }, 500);
        },
      }),
    };
  },
});
