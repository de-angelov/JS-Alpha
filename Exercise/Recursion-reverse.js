const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

let gets = this.gets || getGets(['123456']);
let print = this.print || console.log;

const reverseString = (str) => {
    if (str.length === 0) {
        return str;
    }
    const reversed = reverseString(str.substr(1)) + str[0];
    return reversed;
};

const string = gets();
const result = reverseString(string);
print(result);
