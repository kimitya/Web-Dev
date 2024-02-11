function readNumber() {
    while (true) {
        let number = prompt("Number:");
        if (number == null || number == "") {
            return null;
        } else if (isFinite(number)) {
            return +number;
        }
    }
}
