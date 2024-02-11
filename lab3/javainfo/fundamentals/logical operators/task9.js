let visitor = prompt("Who's there?");
if (visitor == "Admin") {
    let password = prompt("Password");
    if (password == "TheMaster") {
        alert("Welcome");
    } else if (password == "" || password == null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else if (visitor=="" || visitor==null){
    alert("Cancelled");
} else {
    alert ("I don't know you");
}