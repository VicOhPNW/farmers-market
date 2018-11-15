import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props) {
  return (
    <div>
      <h1>{props.day}</h1>
      <h1>{props.location}</h1>
      <h1>{props.hours}</h1>
      <h1>{props.booth}</h1>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Schedule;