const add=require('../index').add;

test('add 2 3', () => {
    expect(add(2, 3)).toBe(5);
});

test('add 2 2', () => {
    expect(add(2, 2)).toBe(5);
});