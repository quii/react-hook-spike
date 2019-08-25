export const initialState = {total: 0}

export const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_BEE:
            return {
                ...state,
                total: state.total + 1,
                [action.bee]: (state[action.bee] ? state[action.bee] : 0) + 1
            }
        case DECREMENT_BEE:
            return {
                ...state,
                total: state.total - 1,
                [action.bee]: (state[action.bee] ? state[action.bee] : 0) - 1
            }
    }
}

const INCREMENT_BEE = 'increment bee'
const DECREMENT_BEE = 'decrement bee'

export const incrementBeesSpotted = (name) => {
    return {type: INCREMENT_BEE, bee: name}
}

export const decrementBeesSpotted = (name) => {
    return {type: DECREMENT_BEE, bee: name}
}