let calculator = {
    // ... ваш код ...
    read(a, b) {
        this.a = +prompt("First number");
        this.b = +prompt("Second number")
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());