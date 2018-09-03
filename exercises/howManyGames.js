//link: https://www.hackerrank.com/challenges/halloween-sale/problem

// p = price
// d = difference (less)
// m = minimum price
// s = how many money do you have?
function howManyGames(p, d, m, s) {
    let moneyLeft = s;
    let count = 0;
    let currentPrice = p;

    while (moneyLeft >= currentPrice) {
        count++;
        moneyLeft -= currentPrice;

        if (currentPrice > m) {
            const nextPrice = currentPrice - d;
            //don't do if the next price deduction is lower than minimum.
            if (!(nextPrice < m)) currentPrice = nextPrice;
            //in this clause, next price deduction would be lower than minimum.
            else currentPrice = m;
        }
    }

    return count;
}

// p = price
// d = difference (less)
// m = minimum price
// s = how many money do you have?
console.log(howManyGames(20, 3, 6, 85));
