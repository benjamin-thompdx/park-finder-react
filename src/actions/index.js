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

// export const makeApiCall = () => {
//   const searchKey = "dallas";
//   return dispatch => {
//     dispatch(requestCities);
//     return fetch(`https://api.teleport.org/api/cities/?search=${searchKey}`)
//       .then(response => response.json())
//       .then(
//         (jsonifiedResponse) => {
//           dispatch(getCitiesSuccess(jsonifiedResponse._embedded["city:search-results"]));
//         })
//       .catch((error) => {
//         dispatch(getCitiesFailure(error));
//       });
//   }
// }

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestCities);
    return fetch(`https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getCitiesSuccess(jsonifiedResponse.categories));
        })
      .catch((error) => {
        dispatch(getCitiesFailure(error));
      });
  }
}


// https://api.teleport.org/api/cities/?search=${cityName}&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity%3Aurban_area%2Fua%3Ascores