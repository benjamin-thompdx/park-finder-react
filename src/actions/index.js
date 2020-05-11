import * as c from './ActionTypes';

export const requestCities = () => ({
  type: c.REQUEST_CITIES
});

export const getCitiesSuccess = (cities) => ({
  type: c.GET_CITIES_SUCCESS,
  cities
});

export const getCitiesFailure = (error) => ({
  type: c.GET_CITIES_FAILURE,
  error
});