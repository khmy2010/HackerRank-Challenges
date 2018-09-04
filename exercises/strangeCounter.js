//link: https://www.hackerrank.com/challenges/strange-code

function strangeCounter(t) {
    let initialCycleValue = 3;

    while (t > initialCycleValue) {
        t = t - initialCycleValue;
        initialCycleValue = initialCycleValue * 2;
    }

    return initialCycleValue - t + 1;
}

console.log(strangeCounter(10));
