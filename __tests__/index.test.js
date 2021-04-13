const add=require('../index').add;

test('add 2 3', () => {
    expect(add(2, 3)).toBe(5);
});