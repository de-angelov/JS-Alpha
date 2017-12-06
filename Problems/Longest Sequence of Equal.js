let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const getLongestSequence= (array) =>{
    let counter = 1;
    let maxcounter = 1;
    let workValue = array[0];
 for (let index = 1; index < array.length; index++) {
     if (array[index]===workValue) {
         counter+=1;
     } else {
         maxcounter=Math.max(counter, maxcounter);
         workValue=array[index];
         counter=1;
     }
 }
 maxcounter=Math.max(counter, maxcounter);
 return maxcounter;
};


const arLenght = gets();
const sequenceAr = [];
for (let index = 0; index < arLenght; index++) {
    sequenceAr[index]= gets();
}
print(sequenceAr);
const output = getLongestSequence(sequenceAr);
print(output);

// const sequenceAr = [1, 2, 3, 3, 3, 3];
// const result=getLongestSequence(sequenceAr);
// console.log(result);
