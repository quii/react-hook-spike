import React, {useReducer} from 'react';
import BeeTracker from "./BeeTracker";
import {initialState, reducer} from "./BeeState";

export const BeeContext = React.createContext(initialState)

export const BeeState = (props) => (
    <BeeContext.Provider value={{state: props.state, dispatch: props.dispatch}}>
        {props.children}
    </BeeContext.Provider>
)

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const total = Object.keys(state).reduce((total, key) => {
        return total+=state[key]
    }, 0)

    return <BeeState state={state} dispatch={dispatch}>
        <h1>You've seen a total of {total} bees</h1>
        <BeeTracker label="Bombus muscorum"/>
        <BeeTracker label="Bombus pascuorum"/>
    </BeeState>
}

export default App;
