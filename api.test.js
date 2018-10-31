const conc = require('./api').conc

test('concat test', () => {
	expect(conc('a','b')).toBe('ab');
});

test('concat null', () => {
	expect(conc(null,null)).toBe(0);
});
