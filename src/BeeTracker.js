import React, { useContext } from "react";
import { BeeContext } from "./App";
import { decrementBeesSpotted, incrementBeesSpotted } from "./BeeState";

const BeeTracker = ({label}) => {
  const { state, dispatch } = useContext(BeeContext);
  const count = state[label] ? state[label] : 0;

  return (
    <section>
      <h1>{label}</h1>
      <button
        disabled={count < 1}
        data-testid="decrement"
        onClick={() => dispatch(decrementBeesSpotted(label))}
      >
        🐝-
      </button>
      <span data-testid="bee-count">Spotted {count} times</span>
      <button
        data-testid="increment"
        onClick={() => dispatch(incrementBeesSpotted(label))}
      >
        🐝+
      </button>
    </section>
  );
};

export default BeeTracker;
