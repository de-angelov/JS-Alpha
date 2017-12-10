const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

const gets = this.gets || getGets(['8']);
const print = this.print || console.log;


const generatePermutations = (index, current, used, source, permutations) => {
    if (index === source.length) {
        permutations.push([...current]);
        return;
    }

    for (let i = 0; i < source.length; i += 1) {
        if (used[i]) {
            continue;
        }

        const next = source[i];
        current[index] = next;
        used[i] = true;
        generatePermutations(index + 1, current, used, source, permutations);
        current[index] = next;
        used[i] = false;
         }
    return permutations;
};
const creteArrayToN= (n)=>{
    const ar=[];
    for (let i=0; i<n; i++) {
         ar.push(i+1);
    }
    return ar;
};

const generatePermutationsToN = (number)=>{
    const source = creteArrayToN(number);
    const index =0;
    const current=[];
    const used=[];
    const permutations=[];
    const result= generatePermutations(index,
         current, used, source, permutations);
         return result;
};

// let testing = generatePermutations(0, [0, 1], 0, [0, 1], [0]);

const n =Number(gets());
const result = generatePermutationsToN(n);
const finish =[];


result.map((x) => {
    finish.push(x.join(' '));
     });

finish.forEach(x=>print(x));

