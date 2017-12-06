const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

const gets = this.gets || getGets(['3']);
const print = this.print || console.log;


const buildMatrix = (n) => {
    const matrix= Array(n).fill().map(()=>Array(n).fill());

    const deltaX = [1, 0, -1, 0];
    const deltaY = [0, 1, 0, -1];
    let action = 0;
    let x = 0;
    let y = 0;
    const isNotInMatrix =(z, j)=>{
        if (z < 0 || z > j-1) {
            return true;
        }

            return false;
    };
    // const nextStepIsFull =(i, j)=>{
    //     if (matrix[i][j] === 'undefined' ) {
    //         return false;
    //     }
    //     return true;
    // };

    for (let i = 1; i < (n * n)+1; i += 1) {
        matrix[y][x] = i;


        if (isNotInMatrix(x +deltaX[action], n)) {
            action += 1;
            action = action % 4;
        }
        if (isNotInMatrix(y +deltaY[action],x +deltaX[action])) {
            action += 1;
            action = action % 4;
        }
        // if (nextStepIsFull(x,y,matrix)) {
        //     action += 1;
        //     action = action % 4;
        // }
        x +=deltaX[action];
        y +=deltaY[action];
    }
    return matrix;
};


const N = Number(gets());
const result = buildMatrix(N);
print(result);
