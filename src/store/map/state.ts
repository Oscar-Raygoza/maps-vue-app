import Mapboxgl from "mapbox-gl";

export interface MapState {
  map?: Mapboxgl.Map;
  markers: Mapboxgl.Marker[];
  distance?: number;
  duration?: number;
  profile?: string;
  isLoadingRoute?: boolean;
}

function state(): MapState {
  return {
    map: undefined,
    markers: [],
    distance: undefined,
    duration: undefined,
    profile: undefined,
    isLoadingRoute: false
  };
}

export default state;
