//link: https://www.hackerrank.com/challenges/mars-exploration/problem

function marsExploration(s) {
    let pattern = 'SOS';
    let errorCount = 0;

    for (let i in s) if (s.charAt(i) !== pattern.charAt(i % 3)) errorCount++;

    return errorCount;
}

console.log(marsExploration('SOSSOT'));
