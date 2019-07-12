import React from "react";
import PropTypes from "prop-types";

const CounterView = ({
  count,
  onClickIncrement,
  onClickDecrement,
  onClickReset
}) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => onClickIncrement(10)}> +1 </button>
      <button onClick={() => onClickDecrement(10)}> -1 </button>
      <button onClick={() => onClickReset()}> reset </button>
    </div>
  );
};

CounterView.propTypes = {
  count: PropTypes.number.isRequired,
  onClickIncrement: PropTypes.func.isRequired,
  onClickDecrement: PropTypes.func.isRequired,
  onClickReset: PropTypes.func.isRequired
};

export default CounterView;
