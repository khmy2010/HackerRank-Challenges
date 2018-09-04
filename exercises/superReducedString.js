// link: https://www.hackerrank.com/challenges/reduced-string/problem

// complicated and convoluted solution

// function superReducedString(s) {
//     if (s.length === 1) return s;
//     if (s.length === 0) return 'Empty String';

//     function isAdjacentExist(string) {
//         let exist = false;

//         const splited = string.split('');

//         splited.forEach((char, index) => {
//             const nextChar = splited[index + 1];
//             if (nextChar && char === nextChar) exist = true;
//         });

//         return exist;
//     }

//     function removeTwins(string, targetIndex) {
//         return string
//             .slice(0)
//             .split('')
//             .filter((_, index) => {
//                 return index < targetIndex || index > targetIndex + 1;
//             })
//             .join('');
//     }

//     let result = s;

//     while (isAdjacentExist(result)) {
//         let targetIndex;
//         const string = result.slice(0);

//         for (let i = 0; i < string.length - 1; i++) {
//             const nextChar = string[i + 1];
//             if (nextChar && nextChar === string[i]) {
//                 targetIndex = i;
//                 break;
//             }
//         }
//         result = removeTwins(result, targetIndex);
//     }

//     return result.length > 0 ? result : 'Empty String';
// }

// simple solution
function superReducedString(s) {
    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i) === s.charAt(i - 1)) {
            s = s.substring(0, i - 1).concat(s.substring(i + 1));
            i = 0; //reset the counter and let the loop restart.
        }
    }

    return s.length ? s : 'Empty String';
}

console.log(superReducedString('baab'));
