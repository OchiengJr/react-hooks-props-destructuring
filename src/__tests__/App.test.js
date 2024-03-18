test("Test passing", () => {
  return expect(Promise.resolve(true)).resolves.toBe(true);
});
