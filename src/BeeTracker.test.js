import Bee from './BeeTracker'
import {render, fireEvent} from "@testing-library/react";
import React from "react";
import {BeeState} from "./App";
import {decrementBeesSpotted, incrementBeesSpotted} from "./BeeState";

describe('bee tracker', () => {
    const beeName = "bumble"

    test('it renders the bee count', () => {
        const state = {bumble: 2}

        const {getByTestId} = render(
            <BeeState state={state}><Bee label={beeName}/></BeeState>
        )
        expect(getByTestId('bee-count').innerHTML).toEqual('Spotted 2 times')
    })

    test('it sends increment action', () => {
        const dispatch = jest.fn()

        const {getByTestId} = render(
            <BeeState state={{bumble: 2}} dispatch={dispatch}><Bee label={beeName}/></BeeState>
        )
        fireEvent.click(getByTestId('increment'))
        expect(dispatch).toBeCalledWith(incrementBeesSpotted(beeName))
    })

    test('it sends decrement action', () => {
        const dispatch = jest.fn()

        const {getByTestId} = render(
            <BeeState state={{bumble: 2}} dispatch={dispatch}><Bee label={beeName}/></BeeState>
        )
        fireEvent.click(getByTestId('decrement'))
        expect(dispatch).toBeCalledWith(decrementBeesSpotted(beeName))
    })

    test('cant see negative number of bees', () => {
        const dispatch = jest.fn()

        const {getByTestId} = render(
            <BeeState state={{bumble: 0}} dispatch={dispatch}><Bee label={beeName}/></BeeState>
        )
        fireEvent.click(getByTestId('decrement'))
        expect(dispatch).not.toBeCalled()
    })
})
