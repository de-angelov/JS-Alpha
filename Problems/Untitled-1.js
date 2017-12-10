const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

const gets = this.gets || getGets(['4', '3 4 2 1']); // 4 1 2 3
const print = this.print || console.log;

const swapLastTwo = (inputAr, n) => {
    const temp = inputAr[n - 1];
    inputAr[n - 1] = inputAr[n - 2];
    inputAr[n - 2] = temp;
    return inputAr.join(' ');
};
const sliceAndSort= (inputAr, n) =>{
    let max = inputAr[n - 1];
    for (let i = n - 1; i < 0; i -= 1) {
        if (inputAr[i] > inputAr[i - 1]) {
            max = inputAr[i];
            input.splice(i, 1);
            inputAr = inputAr.sort().unshift(max);
            return inputAr.join(' ');
        }
    }

}

const getNextPermutation = (inputAr, n) => {
        let result;
        if (inputAr[n] < inputAr[n - 1]) {
            result = swapLastTwo(inputAr, n);
        } else {
            

            return result;
        };

        const n = gets();
        let nArray = gets();
        nArray = nArray.split().map(Number);
        const result = getNextPermutation(nArray, n);
        print(result);
        