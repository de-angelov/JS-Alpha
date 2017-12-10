const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

const gets = this.gets || getGets(['6', '30 40 2 300 500 1']); // 4 1 2 3
const print = this.print || console.log;

const swapLastTwo = (inputAr, n) => {
    const temp = inputAr[n - 1];
    inputAr[n - 1] = inputAr[n - 2];
    inputAr[n - 2] = temp;
    return inputAr.join(' ');
};
const sliceAndSort = (inputAr, n) => {
    let max;
    let work;
    for (let i = n - 1; i > 0; i -= 1) {
        if (inputAr[i] > inputAr[i - 1]) {
            max = inputAr.slice(0, i-1); // change to  arr
            inputAr=inputAr.splice(i-1, n);
            inputAr = inputAr.sort();
            inputAr=max.concat(inputAr);
            return inputAr.join(' ');
        }
    }
    return inputAr.join(' ');
};

const getNextPermutation = (inputAr, n) => {
    let result;
    if (inputAr[n - 1] > inputAr[n - 2]) {
        result = swapLastTwo(inputAr, n);
    } else {

        result = sliceAndSort(inputAr, n);
    }
    return result;
};

const n = Number(gets());
let nArray = gets();
nArray = nArray.split(' ').map(Number);
console.log(nArray);
const result = getNextPermutation(nArray, n);
print(result);
// quit(0);