import { ActionTree } from 'vuex';
import { IMapState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<IMapState, StateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    }
}



export default actions;