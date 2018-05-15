var expect = require('expect');

var { isRealString } = require('./validation');


describe('isRealString', () => {
    it('should reject non-string values', () => {
        var res = isRealString(31313);

        expect(res).toBe(false);
    });
    it('should reject string with only spaces', () => {
        var res = isRealString('        ');

        expect(res).toBe(false);
    });
    it('should reject with non-space characters', () => {
        var res = isRealString('  ddd  ')

        expect(res).toBe(true);
    })
})