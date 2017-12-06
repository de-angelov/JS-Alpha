const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

let gets = this.gets || getGets(['4', '2', '2', '2', '1']);
let print = this.print || console.log;

const getMostFrequent = (arrayInput) => {
    let counter = 0;
    let number = arrayInput[0];
    let maxcounter = 0;
    let maxnumber = arrayInput[0];
    const check = Array.from({
            length: arrayInput.length })
        .fill(true);
        for (let i=0; i<arrayInput.length; i+=1) {
            number=arrayInput[i];
            if (check[i]===true) {
                for (let j=0; j<arrayInput.length; j+=1) {
                    if (arrayInput[i]===arrayInput[j]) {
                        counter+=1;
                        check[j]=false;
                    }
                }
            }
            if (counter>maxcounter) {
                maxcounter=counter;
                maxnumber=number;
            }
            counter=0;
        }


    return { maxcounter, maxnumber };
};
const n = gets();
const inputAr = [];

for (let i = 0; i < n; i += 1) {
    inputAr[i] = gets();
}

const result = getMostFrequent(inputAr);
print(`${result.maxnumber} (${result.maxcounter} times)`);
