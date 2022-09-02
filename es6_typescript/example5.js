var array = [1,2,3,4];

function sum(acc, value) {
    return acc + value;
}

function product(acc, value) {
    return acc * value;

}

var sum = array.reduce(sum, 0);

console.log('Sum : ', sum);


var mul = array.reduce(product, 1);

console.log('Multiple : ', mul);
