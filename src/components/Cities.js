import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';

class Cities extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(makeApiCall());
    }
    
    render(){
      const { error, isLoading, cities } = this.props;
      console.log("CITIES: ", cities);
      if (error) {
        return <React.Fragment>Error: {error.message}</React.Fragment>;
      } else if (isLoading) {
        return <React.Fragment>Loading...</React.Fragment>;
      } else {
        console.log(cities)
        console.log(Object.values(cities))
        const testArray = Object.values(cities);
        return (
          <React.Fragment>
            <h1>City results</h1>
             <ul>
              {testArray.map((city, index) =>
              <li key={index}>
                <h4>{city.name} : {city.score_out_of_10}</h4>

                {/* <h4>{city.matching_full_name}</h4> */}
              </li>
              )}
            </ul>
          </React.Fragment>
        );
      }
    }
  }

  const mapStateToProps = state => {
    return {
      cities: state.cities,
      isLoading: state.isLoading,
      error: state.error
    }
  }
    
    
  export default connect(mapStateToProps)(Cities);