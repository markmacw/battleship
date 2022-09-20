/// <reference types="cypress" />

import battleship from '../../battleship.js'

describe('Unit Test Application Code', function () {
    const {gridWidth} = battleship                                  // i guess this is used in conjunction with import to bring in the unit.js code and assigne it to the unit keyword
    context('battleship.js', function () {
        it('gridwidth is equal to 10', function() {
            expect(gridWidth).to.eq(10)
        })

    })
})