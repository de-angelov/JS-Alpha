let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const getMaxSum =(ar, K) =>{
    ar=ar.sort(function(a, b) {
        return a - b;
      });

    let sum =0;
    ar=ar.slice(3, ar.length-1);
   for (const num of ar) {
       sum+=(+num);
   }
 return sum;
};

// const arLenght = +gets();
// const numberOfSummed = +gets();
// const sequenceAr = [];

// for (let index = 0; index < arLenght; index++) {
//     sequenceAr[index]= +gets();
// }

// const output = getMaxSum(sequenceAr, numberOfSummed);
// print(output);

const output = getMaxSum(['0', 100, '2', '1', '1'], 3);
print(output);

