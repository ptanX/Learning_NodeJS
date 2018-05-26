var counter = (arr) => {
    return 'there are ' + arr.length + ' elements in this array';
}

var adder = (a,b) => {
    return `the sum of 2 numbers is ${a + b}`;
}

module.exports = {
    counter: counter,
    adder: adder
};