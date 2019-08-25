import React, { useContext } from "react";
import { BeeContext } from "./App";
import { decrementBeesSpotted, incrementBeesSpotted } from "./BeeState";

const BeeTracker = props => {
  const { state, dispatch } = useContext(BeeContext);
  const count = state[props.label] ? state[props.label] : 0;

  return (
    <section>
      <h1>{props.label}</h1>
      <button
        disabled={count < 1}
        data-testid="decrement"
        onClick={() => dispatch(decrementBeesSpotted(props.label))}
      >
        -
      </button>
      <span data-testid="bee-count">Spotted {count} times</span>
      <button
        data-testid="increment"
        onClick={() => dispatch(incrementBeesSpotted(props.label))}
      >
        +
      </button>
    </section>
  );
};

export default BeeTracker;
