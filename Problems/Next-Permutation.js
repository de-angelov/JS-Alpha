const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

const gets = this.gets || getGets(['3', '2 1 3']); // 4 1 2 3
const print = this.print || console.log;

const swapLastTwo = (inputAr, n) => {
    const temp = inputAr[n - 1];
    inputAr[n - 1] = inputAr[n - 2];
    inputAr[n - 2] = temp;
    return inputAr.join(' ');
};
1
const swapMidle = (inputAr, n) => {
    let max;
    let work;
    let result;
    for (let i = n - 1; i > 0; i -= 1) {
        if (inputAr[i] > inputAr[i - 1]) {
            max= inputAr[i];
            work = inputAr.slice(i-1).sort();
            work.pop();
            inputAr = inputAr.splice(0, i-1);
            inputAr.push(max);
            inputAr=inputAr.concat(work);
            result=inputAr.join(' ');
            return result;
        }
    }
    return inputAr.join(' ');
};

const getNextPermutation = (inputAr, n) => {
    let result;
    if (inputAr[n - 1] > inputAr[n - 2]) {
        result = swapLastTwo(inputAr, n);
    } else {
        result = swapMidle(inputAr, n);
    }
    return result;
};

const n = Number(gets());
let nArray = gets();
nArray = nArray.split(' ').map(Number);

const result = getNextPermutation(nArray, n);
print(result);
// quit(0);
