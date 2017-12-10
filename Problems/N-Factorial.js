const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

const gets = this.gets || getGets(['0']);
const print = this.print || console.log;

const getFactorial = (number) => {
    if (number<1) {
        return 0;
    } 
    let result = 1;
            if (number === 1) {
        return 1;
    }
    result = number * getFactorial(number - 1);

    return result;

};

const N = gets();
const result = getFactorial(N);
print(result);
quit(0);
