const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

let gets = this.gets || getGets(['0', 100, '2', '1', '1'], 3);
let print = this.print || console.log;

const getMaxSum =(ar, K) =>{
    ar=ar.sort(function(a, b) {
        return a - b;
      });
    let sum =0;
    for (let i = ar.length-1; i > ar.length-1-K; i--) {
        sum=sum + (+ar[i]);
     }
 return sum;
};

const arLenght = +gets();
const numberOfSummed = +gets();
const sequenceAr = [];

for (let index = 0; index < arLenght; index++) {
    sequenceAr[index]= +gets();
}

const output = getMaxSum(sequenceAr, numberOfSummed);
print(output);

// const output = getMaxSum(['0', 100, '2', '1', '1'], 3);
// print(output);

