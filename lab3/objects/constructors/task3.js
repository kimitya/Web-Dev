function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        number = +prompt("Number", 0);
        this.value += number;
    }
}

let accumulator = new Accumulator(1); 

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value); 