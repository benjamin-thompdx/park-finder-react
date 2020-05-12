import React from "react";
import PropTypes from "prop-types";

function ParkDetails(props){
  const { park, onClickingDelete } = props;

  return (
  <React.Fragment>
    <h1>Park Details</h1>
    <h3>{park.name} - {park.location}</h3>
    <p><em>{park.description}</em></p>
    <button onClick={ props.onClickingEdit }>Update Park</button>
    <button onClick={ () => props.onClickingDelete(park.id) }>Delete Park</button>
  </React.Fragment>
  );
}

ParkDetails.propTypes = {
  park: PropTypes.object,
  onClickingDelete: PropTypes.function,
  onClickingEdit: PropTypes.func
};

export default ParkDetails;