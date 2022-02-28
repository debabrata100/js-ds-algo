const quickSort = require("../quickSort");
describe("quick Sort: ", () => {
  it("should sort in ascending order", () => {
    expect(quickSort([2, 1])).toEqual([1, 2]);
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
