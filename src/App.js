import React, { useReducer } from "react";
import BeeTracker from "./BeeTracker";
import { initialState, reducer } from "./BeeState";

export const BeeContext = React.createContext(initialState);

export const BeeProvider = props => (
  <BeeContext.Provider value={{ state: props.state, dispatch: props.dispatch }}>
    {props.children}
  </BeeContext.Provider>
);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BeeProvider state={state} dispatch={dispatch}>
      <h1>You've seen a total of {state.total} bees</h1>
      <BeeTracker label="Bombus muscorum" />
      <BeeTracker label="Bombus pascuorum" />
    </BeeProvider>
  );
};

export default App;
