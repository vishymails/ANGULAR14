const color = "red";

const point = {
    x : 5,
    y : 10,
    color,
    toString() {
        return "x=" + this.x + ", Y= " + this.y + ", color = " + this.color ;
    },
    ['prop_'+ 42] : 42
}

console.log("The Point is " + point);

console.log('The DynamicProperty is ' + point.prop_42);
