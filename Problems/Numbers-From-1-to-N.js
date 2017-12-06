const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

const gets = this.gets || getGets(['4']);
const print = this.print || console.log;

const printToN = (n)=> {
    let result=1;
       for (let i=2; i<+n+1; i+=1) {
        result=result+' '+i;
    }
    return result;
};

const n = gets();
print(printToN(n));
