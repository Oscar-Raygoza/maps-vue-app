import { GetterTree } from 'vuex';
import { IMapState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<IMapState, StateInterface> = {
    isMapReady( state  ) {
        return !!state.map;
    }
}



export default getters;