import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('city reducer actions', () => {
  it('requestCities should create REQUEST_CITIES action', () => {
    expect(actions.requestCities()).toEqual({
      type: c.REQUEST_CITIES
    });
  });

  it('getCitiesSuccess should create GET_CITIES_SUCCESS action', () => {
    const cities = "A city";
    expect(actions.getCitiesSuccess(cities)).toEqual({
      type: c.GET_CITIES_SUCCESS,
      cities
    });
  });

  it('getCitiesFailure should create GET_CITIES_FAILURE action', () => {
    const error ="An error";
    expect(actions.getCitiesFailure(error)).toEqual({
      type: c.GET_CITIES_FAILURE,
      error
    });
  });
});
