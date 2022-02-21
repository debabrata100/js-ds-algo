const bubbleSort = require("../bubbleSort");
describe("Bubble Sort: ", () => {
  it("should sort in ascending order", () => {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
