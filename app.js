const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return []
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num]
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

//console.log(bestSum(7, [5, 3, 4, 7]));
//console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(100, [1,2, 5, 25]));

// const howSum = (targetSum, numbers, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return []
//     if (targetSum < 0) return null

//     for (let num of numbers) {
//         const remainder = targetSum - num
//         const remainderResult = howSum(remainder, numbers, memo)
//         if (remainderResult !== null) {
//             memo[targetSum] = [...remainderResult, num]
//             return memo[targetSum]
//         }
//     }

//     memo[targetSum] = null
//     return null
// }



// const canSum = (targetSum, numbers, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return true;
//     if (targetSum < 0) return false;

//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         if (canSum(remainder, numbers, memo) === true) {
//             memo[targetSum] = true
//             return true
//         }
//     }

//     memo[targetSum] = false;
//     return false;
// }



// const fib = (n, memo = {}) => {
//     if (n in memo) return memo[n]
//     if (n <= 2) {
//         return 1
//     }

//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
//     return memo[n]
// }

// console.log(fib(6))
// console.log(fib(7))
// console.log(fib(8))
// console.log(fib(50))

// const gridTraveler = (m, n, memo = {}) => {
//     // create a string key for mono
//     const key = `${m},${n}`

//     // if we have already calculated this value, return it
//     if (key in memo) return memo[key]

//     if (m === 1 && n === 1) return 1;
//     if (m === 0 || n === 0) return 0;

//     memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
//     return memo[key]
// }

// console.log(gridTraveler(1, 1)); // 1
// console.log(gridTraveler(2, 3)); // 1
// console.log(gridTraveler(3, 2)); // 1
// console.log(gridTraveler(3, 3)); // 1
// console.log(gridTraveler(18, 18)); // 1


// const factorial = (n, memo = {}) => { 
//     // check if we have already calculated this value
//     if (n in memo) return memo[n]

//     if (n === 0) return 1;
//     memo[n] = n * factorial(n - 1, memo);
//     return memo[n];
// }

// console.log(factorial(5)); // 120
// console.log(factorial(20)); // 120