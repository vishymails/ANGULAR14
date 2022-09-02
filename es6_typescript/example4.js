var people = [
    {name : 'Arun', sal : 500000},
    {name : 'Saurab', sal : 9000000},
    {name : 'Sushanth', sal : 95000000},
    {name : 'Mahanth', sal : 94000000},
    {name : 'sneha', sal : 4000000}
]

function highPaidPerson(person) {
    return person.sal > 4000000 && person.sal < 95000000
}

var FirstHighPaidPerson = people.find(highPaidPerson);

console.log ('Found First High paid person ', FirstHighPaidPerson);

var everyOneMatchesCondition = people.every(highPaidPerson);

console.log('Everyone who matches condition ', everyOneMatchesCondition);



var everyOneMatchesConditionUsingSome = people.some(highPaidPerson);

console.log('Everyone who matches condition using some ', everyOneMatchesConditionUsingSome);
