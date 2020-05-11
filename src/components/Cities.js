import React from 'react';

class Cities extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          error: null,
          isLoaded: false,
          cities: []
      };
    }

    makeApiCall = () => {
      const searchKey = "dallas";
      fetch(`https://api.teleport.org/api/cities/?search=${searchKey}`)
        .then(response => response.json())
        .then(
          (jsonifiedResponse) => {
            this.setState({
              isLoaded: true,
              cities: jsonifiedResponse._embedded["city:search-results"]
            });
          })
          .catch((error) => {
            this.setState({
              isLoaded: true,
              error
            });
          });
    }
    
    componentDidMount() {
      this.makeApiCall()
    }
    
    render(){
      const { error, isLoaded, cities } = this.state;
      console.log("CITIES: ", cities);
      if (error) {
        return <React.Fragment>Error: {error.message}</React.Fragment>;
      } else if (!isLoaded) {
        return <React.Fragment>Loading...</React.Fragment>;
      } else {
        const citiesArray = cities[0];
        console.log("CITIES ARRAY", citiesArray);
        console.log(Object.values(cities))
        const testArray = Object.values(cities);
        return (
          <React.Fragment>
            <h1>City results</h1>
            <ul>
              {testArray.map((city, index) =>
              <li key={index}>
                <h4>{city.matching_full_name}</h4>
              </li>
              )}
            </ul>
          </React.Fragment>
        );
      }
    }
  }
    
    
export default Cities;