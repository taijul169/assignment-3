// countdown
// const recursive = (n) => {
//     let nextNumber = n - 1;
//     console.log(nextNumber);
//     if (nextNumber > 0) {
//         recursive(nextNumber);
//     } 
// }
// recursive(10);

// fibonacci series
const fibonacci = (n) => {
    let fibo = [0, 1];
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    i++;
    console.log(fibo);
    if (i < n) {
        fibonacci(i);
    }
}
fibonacci(10);

