import citiesReducer from '../../reducers/cities-Reducer';

describe('citiesReducer', () => {

  const defaultState = {
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
});