const selectionSort = require("../selectionSort");
describe("Selection Sort: ", () => {
  it("should sort in ascending order", () => {
    expect(selectionSort([2, 1])).toEqual([1, 2]);
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
