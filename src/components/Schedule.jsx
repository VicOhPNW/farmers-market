import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props) {
  let styledSchedule = {
    color: 'black',
    fontFamily: 'Shadows Into Light, cursive',
    letterSpacing: 3,
    marginTop: 35
  };

  return (
    <div>
      <div style={styledSchedule} className="card-deck mx-auto">
        <div className="card">
          <div className="card-header">
            <style jsx>{`
                .card-header {
                    background-color: rgba(15, 117, 1, 0.4);
                    opacity
                }
            `}</style>
            <h3>{props.day}</h3>
          </div>
          <div>
            <h4 className="card-text ml-2">Location: {props.location}</h4>
            <h4 className="card-text ml-2">Hours: {props.hours}</h4>
            <h4 className="card-text ml-2">Booth: {props.booth}</h4>
          </div>
        </div>
      </div>
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