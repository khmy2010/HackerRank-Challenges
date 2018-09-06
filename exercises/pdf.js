//link: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

// h: an array of integers representing the heights of each letter
// word: a string

function designerPdfViewer(h, word) {
    const a = 97;

    const heights = word
        .toLowerCase()
        .split('')
        .reduce((acc, char) => {
            //ascii: https://asecuritysite.com/coding/asc2
            //a = 97
            const ascii = char.charCodeAt(0);
            //get correct index for array of h by deducting 97
            const index = ascii - a;
            const height = h[index];
            acc.push(height);
            return acc;
        }, []);

    return Math.max(...heights) * word.length;
}

console.log(
    designerPdfViewer(
        [
            1,
            3,
            1,
            3,
            1,
            4,
            1,
            3,
            2,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ],
        'abc'
    )
);
