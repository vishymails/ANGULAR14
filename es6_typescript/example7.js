class Account {
    constructor(balance) {
        this.balance = balance;
    }

    toString() {
        return 'Availabale Balance ' + this.balance;
    }
}

class CorporateAccount extends Account {
    constructor(balance, deposit) {
        super(balance);
        this.deposit = deposit;
    }

    toString() {
        return 'Available Balance' + this.balance + "Deposit" + this.deposit
    }
}

class Temp {
    constructor() {

    }
}
console.log("Test : " + new Account(10000));

console.log("Test2" + new CorporateAccount(10000, 1000));

console.log(new Temp());