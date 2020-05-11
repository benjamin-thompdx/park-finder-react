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

export const makeApiCall = () => {
  const searchKey = "dallas";
  return dispatch => {
    dispatch(requestCities);
    return fetch(`https://api.teleport.org/api/cities/?search=${searchKey}`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        dispatch(getCitiesSuccess(jsonifiedResponse.results));
      })
    .catch((error) => {
      dispatch(getCitiesFailure(error));
    });
  }
}