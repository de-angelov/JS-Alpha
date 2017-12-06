let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const getLongestSequence= (array) =>{
    let counter = 1;
    let maxcounter = 1;
    let workValue = +array[0];
 for (let index = 1; index < array.length; index++) {
   if (workValue+1===array[index]) {
       counter+=1;
       workValue+=1;
   } else {
       workValue=array[index];
       maxcounter=Math.max(counter, maxcounter);
       counter=1;
   }
 }
 maxcounter=Math.max(counter, maxcounter);
 return maxcounter;
};

// const sequenceAr = [7, 3, 2, 3, 4, 2, 2, 4];
// const sequenceAr = [11, 2, 4, 6];
// const sequenceAr = [7, 2, 3, 4];
// const sequenceAr = [-0, -1, -1];
// const sequenceAr = ['7', '2', '3', '4'];
// const sequenceAr = [1, 2, 3, 4, 5];

const sequenceAr = [];
const arLenght = +gets();

for (let index = 0; index < arLenght; index++) {
    sequenceAr[index]= +gets();
}


const output = getLongestSequence(sequenceAr);
print(output);


