// To find out the nth digit in the fibonacci series

// recursive solution
function fib_rec(n){
    if(n<=2) return 1;
    return fib(n-1) + fib(n-2);
}

//Dynamic solution with memoization
function fib_memo(n, memo = []){
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    let res = fib_memo(n-1, memo) + fib_memo(n-2, memo);
    memo[n] = res;
    return res;
}
let result = fib_memo(8);
console.log(result);