//link: https://www.hackerrank.com/challenges/equality-in-a-array/

function equalizeArray(arr) {
    const map = {};
    const length = arr.length;

    arr.forEach(ele => (map[ele] = map[ele] + 1 || 1));

    const max = Math.max(...Object.values(map));

    //there is a majority element , remove the minority then.
    return max >= 2 ? length - max : length - 1;
}
