var array = [1,2,3,4,5];


function printFirstandSecondElement([first, second]) {
    console.log("First Element : " + first + ", Second :" + second);
}


printFirstandSecondElement(array);



function printFirstandFourthElement([first, , , fourth]) {
    console.log("First Element : " + first + ", Fourth :" + fourth);
}

printFirstandFourthElement(array);



function printBasicInfo({firstName, lastName, profession}) {
    console.log(firstName + " " + lastName + " " + profession);
}

var person = {
    firstName : "John",
    company : "John deere",
    lastName : "Smith",
    age : 33,
    children : 2,
    profession : 'teacher'
}

printBasicInfo(person);