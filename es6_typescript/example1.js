function f() {
    var x = 1;
    let y = 2;
    const z = 3;

    {
        var x = 100;
        let y = 200;
        const z = 300;

        console.log('x in block scope is : ', x);
        console.log('y in block scope is : ', y);
        console.log('x in block scope is : ', z);
        
    }

    console.log('x in outside scope is : ', x);
    console.log('y in outside scope is : ', y);
    console.log('z in outside scope is : ', z);
}

f();