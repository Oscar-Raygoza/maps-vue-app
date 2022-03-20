import Mapboxgl from 'mapbox-gl';

export interface IMapState {
    map?: Mapboxgl.Map;
    markers: Mapboxgl.Marker[];
    distance?: number;
    duration?: number;
}

function state(): IMapState {
    return {
        map: undefined,
        markers: [],
        distance: undefined,
        duration: undefined,
    }
}

export default state;