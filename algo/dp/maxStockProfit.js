/**
 * TC: O(n)
 */
function maxStockProfit(stockArr) {
  if (stockArr.length < 3) return undefined;
  let buyPrice = stockArr[0];
  let sellPrice = buyPrice;
  let maxProfit = 0;
  let bestBuyPrice = stockArr[0];
  let bestSellPrice = stockArr[0];
  for (let i = 1; i < stockArr.length; i++) {
    sellPrice = stockArr[i];
    tempProfit = Math.max(maxProfit, sellPrice - buyPrice);
    if (tempProfit > maxProfit) {
      bestBuyPrice = buyPrice;
      bestSellPrice = sellPrice;
    }
    maxProfit = tempProfit;
    if (stockArr[i] < buyPrice) {
      buyPrice = stockArr[i];
    }
  }
  return { maxProfit, bestBuyPrice, bestSellPrice };
}

// console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42]));
// console.log(maxStockProfit([55, 29, 22, 21, 20, 19]));
// console.log(maxStockProfit([150, 120, 130, 160, 125, 170]));
