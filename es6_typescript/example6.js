var array = [1,2,3,4,5];

const sum = (acc, value) => {
    const result = acc + value;
    console.log(acc, '+ ', value, '=', result);

    return result;
}

const product = (acc, value) => acc * value;


var sum1 = array.reduce(sum, 0);

console.log(sum1);

console.log(array.reduce(product, 1));
