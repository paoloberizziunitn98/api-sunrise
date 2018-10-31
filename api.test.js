const conc = require('./api').conc

test('concat test', () => {
	expect(conc('a','b')).toBe('ab');
});

test('concat null', () => {
	axpec(conc(null,null)).toBe(0);
});
