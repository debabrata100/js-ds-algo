const mergeSort = require("../mergeSort");
describe("Merge Sort: ", () => {
  it("should sort in ascending order", () => {
    expect(mergeSort([2, 1])).toEqual([1, 2]);
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
