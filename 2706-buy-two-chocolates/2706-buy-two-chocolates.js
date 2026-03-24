/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a-b)
    let c= prices[0]+prices[1]
    if(c<=money){
        return money-c
    }
    return money
};