import { MutationTree } from "vuex";
import { IMapState } from "./state";

const mutation: MutationTree<IMapState> = {
  setMap(state: IMapState, map: any) {
    state.map = map;
  },
};

export default mutation;
