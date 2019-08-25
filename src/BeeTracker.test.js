import Bee from './BeeTracker'
import {fireEvent, render} from "@testing-library/react";
import React from "react";
import {BeeProvider} from "./App";
import {decrementBeesSpotted, incrementBeesSpotted} from "./BeeState";

describe('bee tracker', () => {
    const beeName = "bumble"
    const dispatch = jest.fn()

    beforeEach(() => dispatch.mockReset())

    test('it renders the bee count', () => {
        const {getByTestId} = render(
            <BeeProvider state={{bumble: 2}}><Bee label={beeName}/></BeeProvider>
        )
        expect(getByTestId('bee-count').innerHTML).toEqual('Spotted 2 times')
    })

    describe('dispatch', () => {
        test('it sends increment action when + is clicked', () => {
            const {getByTestId} = render(
                <BeeProvider state={{bumble: 2}} dispatch={dispatch}><Bee label={beeName}/></BeeProvider>
            )
            fireEvent.click(getByTestId('increment'))
            expect(dispatch).toBeCalledWith(incrementBeesSpotted(beeName))
        })

        test('it sends decrement action when - is clicked', () => {
            const {getByTestId} = render(
                <BeeProvider state={{bumble: 2}} dispatch={dispatch}><Bee label={beeName}/></BeeProvider>
            )
            fireEvent.click(getByTestId('decrement'))
            expect(dispatch).toBeCalledWith(decrementBeesSpotted(beeName))
        })

        test('wont dispatch decrement when count is at 0', () => {
            const {getByTestId} = render(
                <BeeProvider state={{bumble: 0}} dispatch={dispatch}><Bee label={beeName}/></BeeProvider>
            )
            fireEvent.click(getByTestId('decrement'))
            expect(dispatch).not.toBeCalled()
        })
    })
})
