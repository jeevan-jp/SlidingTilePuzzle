import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { incrementTimer } from '../../actions/timerReducer';

const mapStateToProps = state => ({
  timer: state.timer,
});

const mapDispacherToProps = dispatch => ({
  incrementTimer: time => dispatch(incrementTimer(time))
});

const Timer = ({ timer, incrementTimer }) => {
  // timer = time elapsed in seconds

  let hrs = Math.floor(timer / 3600);
  let mins = Math.floor((timer / 60) - hrs * 60);
  let seconds = timer % 60;

  setTimeout(() => {
    incrementTimer(timer);
  }, 1000);

  return (
    <span>
      {hrs}h {mins}m {seconds}s
    </span>
  );
}

export default connect(mapStateToProps, mapDispacherToProps)(Timer);

Timer.proptTypes = {
  incrementTimer: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
}