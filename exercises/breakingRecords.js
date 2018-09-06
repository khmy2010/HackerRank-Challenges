//link: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
    let highest = scores[0];
    let lowest = scores[0];

    return scores.reduce(
        (acc, current) => {
            //new lowest mark
            if (current < lowest) {
                acc[1] = acc[1] + 1 || 1;
                lowest = current;
            }

            //new highest mark
            if (current > highest) {
                acc[0] = acc[0] + 1 || 1;
                highest = current;
            }

            return acc;
        },
        [0, 0]
    );
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
