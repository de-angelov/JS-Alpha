const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

let gets = this.gets || getGets(['123456']);
let print = this.print || console.log;


const spaced = (i) => {
    if (i.length === 0) {
        return ``;
    }
    const result = `${i[0]} `+spaced(i.substr(1));
    return result.trim();
};
const inp= gets();
const result = spaced(inp);
print(result);
