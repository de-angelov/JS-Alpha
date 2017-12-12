const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};
const gets = this.gets || getGets(['10', '2', '3']);
const print = this.print || console.log;

const bigestOfThreeRecursion = (arrayInpt) => {
    if (arrayInpt.length < 2) {
        return arrayInpt[0];
    }
    let max = Number(arrayInpt[arrayInpt.length - 1]);
    arrayInpt.pop();
    max = Math.max(bigestOfThreeRecursion(arrayInpt), max);
    return max;
};
const numberAr = [];
for (let i=0; i<3; i+=1) {
 numberAr.push(gets());
}


const result = bigestOfThreeRecursion(numberAr);
print(result);
