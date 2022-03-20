import { createStore } from 'vuex';

// My custom modules
//import exampleModule from './module-template';
//import { ExampleStateInterface } from './module-template/state';

import placesModule from './places';
import { IPlacesState } from './places/state';

import mapModule from './map';
import { IMapState } from './map/state';


export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  //example: ExampleStateInterface
  places: IPlacesState,
  map: IMapState
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule,
  }
});