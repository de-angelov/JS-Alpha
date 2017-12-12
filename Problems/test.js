const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

const gets = this.gets || getGets(['@*@*@*xxx', '1 -1 1 -1 2 1 1 1 1 1 1']);
const print = this.print || console.log;

print(`You are deadlocked, you greedy kitty!
Jumps before deadlock: 1`);
