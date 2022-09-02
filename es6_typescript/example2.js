var companies = [ 'ISRO', 'IBM', 'SUN', 'SAP'];

function print(val) {
    console.log(val);
}


companies.forEach(print);

console.log("-----------------------------");

with(companies) {
    forEach(print);
}


function changeProperty(val) {
    return val.toLowerCase();
}

var changed = companies.map(changeProperty);

console.log(changed);