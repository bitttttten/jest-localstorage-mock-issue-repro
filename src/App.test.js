test("localStorage", () => {
  localStorage.setItem("test", "test");
  expect(localStorage.getItem("test")).toBe("test");
});
