import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';

class Cities extends React.Component {
    constructor(props) {
      super(props);
      // this.state = {
      //     error: null,
      //     isLoaded: false,
      //     cities: []
      // };
    }

    // makeApiCall = () => {
    //   const searchKey = "dallas";
    //   fetch(`https://api.teleport.org/api/cities/?search=${searchKey}`)
    //     .then(response => response.json())
    //     .then(
    //       (jsonifiedResponse) => {
    //         this.setState({
    //           isLoaded: true,
    //           cities: jsonifiedResponse._em  bedded["city:search-results"]
    //         });
    //       })
    //       .catch((error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error
    //         });
    //       });
    // }
    
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
        // console.log(Object.values(cities))
        // const testArray = Object.values(cities);
        return (
          <React.Fragment>
            <h1>City results</h1>
            {/* <ul>
              {testArray.map((city, index) =>
              <li key={index}>
                <h4>{city.matching_full_name}</h4>
              </li>
              )}
            </ul> */}
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