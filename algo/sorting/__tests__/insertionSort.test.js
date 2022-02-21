const insertionSort = require("../insertionSort");
describe("Insertion Sort: ", () => {
  it("should sort in ascending order", () => {
    expect(insertionSort([2, 1])).toEqual([1, 2]);
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
