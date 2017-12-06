const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

let gets = this.gets || getGets([3]);
let print = this.print || console.log;

const fact = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
};

const number = gets();
const result = fact(number);
print(result);