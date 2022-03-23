import { defineComponent, ref, onMounted, watch } from "vue";
import { usePlacesStore } from "../../composables/usePlacesStore";
import { useMapStore } from "../../composables/useMapStore";

/**
 * Components
 */
import { Jawn as Spinner } from "vue-loading-spinner";
import Mapboxgl from "mapbox-gl";

export default defineComponent({
  name: "MapView",
  components: {
    Spinner,
  },
  setup() {
    const mapRef = ref<HTMLDivElement | null>();
    const { userLocation, isUserLocationReady } = usePlacesStore();
    const { setMap } = useMapStore();

    const initMap = async () => {
      if (!mapRef.value) return;
      if (!userLocation) return;

      await Promise.resolve();
      const map = new Mapboxgl.Map({
        container: mapRef.value, // container ID
        style: "mapbox://styles/mapbox/dark-v10", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom
      });

      const myLocationPopup = new Mapboxgl.Popup()
        .setLngLat(userLocation.value ? userLocation.value : [0, 0])
        .setHTML(`<p style="color: #000">You are here</p>`);

      const myLocationMarker = new Mapboxgl.Marker()
        .setLngLat(userLocation.value ? userLocation.value : [0, 0])
        .setPopup(myLocationPopup)
        .addTo(map);

      setMap(map);
    };

    onMounted(() => {
      if (isUserLocationReady.value) return initMap();
    });

    watch(
      isUserLocationReady,
      (newVal) => {
        console.log({ newVal });
        if (isUserLocationReady) initMap();
      },
      { immediate: true }
    );
    return {
      isUserLocationReady,
      mapRef,
    };
  },
});
