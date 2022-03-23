import { MutationTree } from "vuex";
import Mapboxgl from "mapbox-gl";
import { MapState } from "./state";
import { Feature } from "@/interfaces/PlacesResponse";

const mutation: MutationTree<MapState> = {
  setMap(state: MapState, map: Mapboxgl.Map) {
    state.map = map;
  },
  setDistanceDurationRoute(
    state: MapState,
    { distance, duration, profile }: { distance: number; duration: number, profile: string }
  ) {
    let kms = distance / 1000;
    kms = Math.round(kms * 100);
    kms /= 100;

    state.distance = kms;
    state.profile = profile;
    state.duration = Math.floor(duration / 60);
  },
  setPlacesMarket(state: MapState, places: Feature[]) {
    if (!state.map) return;

    state.markers.forEach((marker) => marker.remove());
    state.markers = [];

    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Mapboxgl.Popup()
        .setLngLat([lng, lat])
        .setHTML(
          `<p style="color: #000">${place.text}<br/>${place.place_name}</p>`
        );

      const marker = new Mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(state.map);

      state.markers.push(marker);
    }
    // clear polyline
    if (state.map.getLayer("RouteString")) {
      state.map.removeLayer("RouteString");
      state.map.removeSource("RouteString");
      state.distance = undefined;
      state.profile = undefined;
      state.duration = undefined;
    }
  },
  setRoutePolyline(state: MapState, coords: number[][]) {
    //
    const initialRoute = coords[0];
    //const endRoute = coords[coords.length - 1];

    const bouds = new Mapboxgl.LngLatBounds(
      [initialRoute[0], initialRoute[1]],
      [initialRoute[0], initialRoute[1]]
    );

    for (const coord of coords) {
      const newCoord: [number, number] = [coord[0], coord[1]];
      bouds.extend(newCoord);
    }

    state.map?.fitBounds(bouds, {
      padding: 100,
    });

    const sourceData: Mapboxgl.AnySourceData = {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: coords,
            },
          },
        ],
      },
    };

    if (state.map?.getLayer("RouteString")) {
      state.map.removeLayer("RouteString");
      state.map.removeSource("RouteString");
    }

    state.map?.addSource("RouteString", sourceData);

    state.map?.addLayer({
      id: "RouteString",
      type: "line",
      source: "RouteString",
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "#0099ff",
        "line-width": 5,
      },
    });
  },
};

export default mutation;
