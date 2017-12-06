const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

const gets = this.gets || getGets(['129', '150', '-200', '170', '0']);
const print = this.print || console.log;

const maxNumber =(input) =>{
    let max = input[0];
    input.forEach((element) => {
max= Math.max(max, element);
});
    return max;
};
const input = [];
for (let i=0; i<5; i+=1) {
    input.push(+gets());
   }
const result = maxNumber(input);

print(result);


