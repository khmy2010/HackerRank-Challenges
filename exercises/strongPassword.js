// link: https://www.hackerrank.com/challenges/strong-password/problem

function mininumNumber(n, password) {
    let add = 0;

    const numberRegex = new RegExp(/\d/m);
    if (!numberRegex.test(password)) add++;

    const lowercaseRegex = new RegExp(/[a-z]/m);
    if (!lowercaseRegex.test(password)) add++;

    const uppercaseRegex = new RegExp(/[A-Z]/m);
    if (!uppercaseRegex.test(password)) add++;

    const symbolRegex = new RegExp(/!|@|#|\$|%|\^|&|\*|\(|\)|-|\+/m);
    if (!symbolRegex.test(password)) add++;

    //because the password inserted might consists of 5 lowercase ONLY.
    //hence 6-5 might be wrong because still not enough to met all conditions.
    return Math.max(add, 6 - n);
}

console.log(mininumNumber(3, 'Ab1'));
