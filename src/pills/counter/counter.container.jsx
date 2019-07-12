import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCount } from "./counter.selector";
import CounterView from "./counter.view";
import { incrementCount, decrementCount, resetEvent } from "./counter.action";

const CounterContainer = ({ count, increment, decrement, reset }) => {
  return (
    <CounterView
      count={count}
      onClickDecrement={decrement}
      onClickIncrement={increment}
      onClickReset={reset}
    />
  );
};

CounterContainer.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { count: getCount(state) };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: value => dispatch(incrementCount(value)),
    decrement: value => dispatch(decrementCount(value)),
    reset: value => dispatch(resetEvent())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
