// task 1

let string = 0
let number = 0
let boolean = 0
let object = 0
let others = 0

let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

arr.filter(item => {
    if (typeof (item) === 'string') {
        string++
    } else if (typeof (item) === 'number') {
        number++
    } else if (typeof (item) === 'boolean') {
        boolean++
    } else if (typeof (item) === 'object') {
        object++
    } else {
        others++
    }
}) 
newArr = [string + number]

console.log(
    [string, number, boolean, object, others], [newArr]
);
