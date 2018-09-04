//link: https://www.hackerrank.com/challenges/find-digits

function findDigits(n) {
    return n
        .toString(10)
        .split('')
        .reduce((acc, current) => {
            const number = parseInt(current, 10);
            if (number !== 0 && n % current === 0) acc += 1;
            return acc;
        }, 0);
}

console.log(findDigits(1012));
