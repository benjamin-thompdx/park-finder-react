import * as c from './../actions/ActionTypes';

const initialState = {
  isLoading: false,
  cities: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_CITIES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_CITIES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        cities: action.cities
      });
    case c.GET_CITIES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};