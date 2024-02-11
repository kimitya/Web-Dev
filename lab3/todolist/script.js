const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    var inputValue = document.getElementById("input-box").value;

    if (inputValue == "") {
        alert("Write something");
    } else {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        var label = document.createElement("label");
        label.appendChild(document.createTextNode(inputValue));

        li.appendChild(checkbox);
        li.appendChild(label);

        let span = document.createElement("span");
        span.innerHTML = "\&times;";

        li.appendChild(span);
        document.getElementById("list-container").appendChild(li);

        document.getElementById("input-box").value = "";
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);