const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

const gets = this.gets || getGets(['2', '2 2', '2 1']);
const print = this.print || console.log;

const getSumAr=(inputAr)=>{
    const outputAr= [];

    for (let couple of inputAr) {
        couple=couple.split(' ');
        outputAr.push((+couple[0])+(+couple[1]));
    }
    return outputAr;
};

const n = gets();
const inputAr = [];

for (let i = 0; i < n; i += 1) {
    inputAr[i] = gets();
}

const result = getSumAr(inputAr);
for (const sum of result) {
    print(sum);
}
