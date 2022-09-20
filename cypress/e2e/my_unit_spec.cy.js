/// <reference types="cypress" />

import unit from '../../unit.js'

describe('Unit Test Application Code', function () {
    const {add, jort, x} = unit                                  // i guess this is used in conjunction with import to bring in the unit.js code and assigne it to the unit keyword
    context('unit.js', function () {
        it('can add numbers', function () {
            expect(add(1, 2)).to.eq(3)
        })
        it('has the textual value expected for jort', function() {
            expect(jort()).to.eq('you got jorts')
        })
        it('can also grab a constant', function() {
            expect(x).to.eq(1)
        })

    })
})