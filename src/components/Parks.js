import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';
import ParkForm from './ParkForm';

class Parks extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(makeApiCall());
    }
    
    render(){
      const { error, isLoading, parks } = this.props;
      console.log("PARKS: ", parks);
      if (error) {
        return <React.Fragment>Error: {error.message}</React.Fragment>;
      } else if (isLoading) {
        return <React.Fragment>Loading...</React.Fragment>;
      } else {
        console.log(parks)
        console.log(Object.values(parks))
        const testArray = Object.values(parks);
        return (
          <React.Fragment>
            <ParkForm />
            <h1>Park Results</h1>
             <ul>
              {testArray.map((park, index) =>
              <li key={index}>
                <h4>{park.name} : {park.location}</h4>

                {/* <h4>{park.matching_full_name}</h4> */}
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
      parks: state.parks,
      isLoading: state.isLoading,
      error: state.error
    }
  }
    
    
  export default connect(mapStateToProps)(Parks);