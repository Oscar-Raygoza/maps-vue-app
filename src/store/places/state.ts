export interface IPlacesState {
  isLoading: boolean;
  userLocation?: [number, number]; // [latitude, longitude]
}

function state(): IPlacesState {
  return {
    isLoading: true,
    userLocation: undefined,
  };
}

export default state;
