let container = [0, 1];
const n = 10;
let i = 0;
for (i = 2; i < n; i++){
    container[i] = container[i - 1] + container[i - 2]
    console.log(container);
}
