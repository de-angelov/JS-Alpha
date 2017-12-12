const getGets = (arr) => {
    let index = 0;
    return () => {
        return arr[index++];
    };
};

const gets = this.gets || getGets(['@*@*@*xxx', '1 -1 1 -1 2 1 1 1 1 1 1']);
const print = this.print || console.log;

const stringPosition = gets().split('');
const stringPath = gets().split(' ');

const helpKity = (stringPosition, stringPath) => {
    let deadlock = 0;
    let souls = 0;
    let food = 0;
    const visited = 'visited';
    const movesLen = stringPath.length;
    let position = 0;


    const visitPostion = (type, pos) => {
        type += 1;
        stringPosition[pos] = visited;
        return type;
    };
    const escapeDeadlock = (p) => {
        deadlock += 1;
        if (p % 2 === 0) {
            souls -= 1;
            // stringPosition[position] = '@';
        }
        if (p % 2 !== 0) {
            food -= 1;
            // stringPosition[position] = '*';
        }
    };

    const generatePosition = (pos, move, l) => {
        pos += Number(move);
        if (pos < 0) {
            pos = l + pos;
        }
        if (pos > l - 1) {
            pos = pos - l;
        }
        return pos;
    };
    const checkFoodandSouls = () => {
        if (food < 0 || souls < 0) {
            return true;
        }
        return false;
    };
    // @ - symbol for coder soul
    // * - symbol for food
    // x - symbol for deadlock


    for (let i = 0; i < movesLen + 1; i++) {
        if (checkFoodandSouls()) {
            return `You are deadlocked, you greedy kitty!
    Jumps before deadlock: ${i-1}`;
        }

        switch (stringPosition[position]) {
            case '@':
                souls = visitPostion(souls, position);
                break;
            case '*':
                food = visitPostion(food, position);
                break;
            case 'x':
                escapeDeadlock(position);
                break;
            default:
        }
        position = generatePosition(position, stringPath[i], stringPosition.length);
    }


    return `Coder souls collected: ${souls}
Food collected: ${food}
Deadlocks: ${deadlock}`;
};

const result = helpKity(stringPosition, stringPath);
print(result);
