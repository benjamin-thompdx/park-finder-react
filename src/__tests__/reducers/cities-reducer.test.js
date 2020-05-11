import citiesReducer from '../../reducers/cities-Reducer';
import * as c from './../../actions/ActionTypes';

describe('citiesReducer', () => {

  let action;

  const defaultState = {
    isLoading: false,
    cities: [],
    error: null
  };

  const loadingState = {
    isLoading: false,
    cities: [],
    error: null
  };

  test('should successfully return default state if no action is passed to it', () => {
    expect(citiesReducer(defaultState, {type:null})).toEqual(
      {
      isLoading: false,
      cities: [],
      error: null
      }
    );
  });

  test('should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_CITIES
    };

    expect(citiesReducer(defaultState, action)).toEqual({
      isLoading: true,
      cities: [],
      error: null
    });
  });

  test('failing to get cities should change isLoading to false and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_CITIES_FAILURE,
      error
    };

    expect(citiesReducer(loadingState, action)).toEqual({
      isLoading: false,
      cities: [],
      error: "An error"
    });
  });

});