// link: https://www.hackerrank.com/challenges/angry-professor/problem

//k: the threshold number of students
//a: an array of integers representing arrival times

/*
    Function Description
    Complete the angryProfessor function in the editor below.
    It must return YES if class is cancelled, or NO otherwise.
*/

function angryProfessor(k, a) {
    return a.sort()[k - 1] <= 0 ? 'NO' : 'YES';
}

console.log(angryProfessor(2, [0, -1, 2, 1]));
