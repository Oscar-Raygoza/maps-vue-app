import { computed, defineComponent, onMounted, ref } from "vue";
import { useMapStore, usePlacesStore } from "@/composables";

/**
 * Components
 */
import SearchResults from "@/components/searchbar/SearchResults.vue";

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
    const { isUserLocationReady, searchPlaces } = usePlacesStore();
    const { isMapReady } = useMapStore();

    const debouncedSearchTiemeOut = ref();
    const debouncedSearchValue = ref();

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
