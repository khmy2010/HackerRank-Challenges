// link: https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr) {
    const map = arr.sort().reduce((acc, current) => {
        acc[current] = acc[current] + 1 || 1;
        return acc;
    }, {});

    const max = Math.max(...Object.values(map));
    const keys = Object.keys(map);

    let maxKey;

    for (let x = 0; x < keys.length; x++) {
        const currentKey = keys[x];
        if (map[currentKey] === max) {
            maxKey = currentKey;
            break;
        }
    }

    return maxKey;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4, 4]));
