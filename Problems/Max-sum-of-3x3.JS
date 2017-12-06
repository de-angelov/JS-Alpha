const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

const gets = this.gets || getGets(['6 3', '0 0 0', '1 1 1', '0 0 0', '0 0 0', '0 0 0', '10000 0 1']);                                      //(['5 5', '1 1 3 3 5', '-6 -7 2 -3 -1', '3 0 -4 5 9', '7 -7 0 1 0', '-7 -6 -4 -4 9']);
const print = this.print || console.log;

const sum3x3=(arr, i, j)=>{
    const Sum =arr[i][j]+arr[i][j+1]+arr[i][j+2]+
                 arr[i+1][j]+arr[i+1][j+1]+arr[i+1][j+2]+
                 arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
    return Sum;
};

const maxSum3x3 = (arr, n, m) =>{
    let sum;
    let maxSum = sum3x3(arr, 0, 0);

    for (let i=0; i<n-2; i++) {
        for (let j=0; j<m-2; j++) {
            sum=sum3x3(arr, i, j);
            if (sum>maxSum) {
                maxSum=sum;
            }
        }
    }

    return maxSum;
};

const input = gets().split(' ').map(Number);
const workAr = [];

for (let i = 0; i < input[0]; i += 1) {
    workAr[i] = gets().split(' ').map(Number);
}

const result = maxSum3x3(workAr, input[0], input[1]);

print(result);

quit(0);

