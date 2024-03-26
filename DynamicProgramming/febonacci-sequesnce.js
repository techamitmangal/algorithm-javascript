//Given a number n, print n-th Fibonacci Number. 
//The Fibonacci numbers are the numbers in the following integer sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..
/*
Input  : n = 1

Output : 1

Input  : n = 9

Output : 34

Input  : n = 10

Output : 55
*/

const febonacciNum = (n, memoization = {}) => {

    if (n in memoization) {
        return memoization[n];
    }

    if (n==0 || n==1 || n==2) {
        return 1;
    }

    memoization[n] = febonacciNum(n-1, memoization) + febonacciNum(n-2, memoization);
    return memoization[n] ;
}

console.log("Febonacci Num " + febonacciNum(50));