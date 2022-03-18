import { Module } from 'vuex';
import { StateInterface } from '../index';

import state, { IPlacesState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const placesModule: Module<IPlacesState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default placesModule;