//link: https://www.hackerrank.com/challenges/sock-merchant/problem

// n: the number of socks in the pile
// ar: the colors of each sock
function sockMerchant(n, ar) {
    //original solution
    // const map = ar.reduce((acc, current) => {
    //     acc[current] = acc[current] + 1 || 1;
    //     return acc;
    // }, {});

    // let count = 0;

    // Object.keys(map).forEach(key => {
    //     const pair = Math.floor(map[key] / 2);
    //     count = count + pair;
    // });

    // return count;

    //after referring to https://www.hackerrank.com/challenges/sock-merchant/forum/comments/231526
    const map = {};
    let count = 0;

    for (let sock of ar) {
        map[sock] = map[sock] + 1 || 1;
        if (map[sock] % 2 === 0) count++;
    }

    return count;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
