const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

const gets = this.gets || getGets(['3', '1 2 3']);
const print = this.print || console.log;
const getNextPermutation = (inputAr) => {
    const temp = inputAr[inputAr.length-1];
    inputAr[inputAr.length-1] = inputAr[inputAr.length - 2];
    inputAr[inputAr.length - 2] = temp;
    return inputAr.join(' ');
};

const n = gets();
let nArray = gets();
nArray=nArray.split(' ').map(Number);
const result = getNextPermutation(nArray);
print(result);
// quit(0);
