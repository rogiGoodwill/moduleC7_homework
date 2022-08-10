const txtReverse = require("../txtReverse");

describe('Testing txtReverse function', () => {
    it('reverse qwerty to ytrewq', () => {
        const test_txt = 'qwerty'
        expect(txtReverse(test_txt)).toBe('ytrewq')
    })
});