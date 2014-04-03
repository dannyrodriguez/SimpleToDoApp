var counter = 0;

function clickButton() {
    "user strict";

    var text = document.getElementById("todoInput").value;
    document.getElementById("itemList").innerHTML += "<li id = 'item" + counter + "' onclick=\"finish("+counter+");\">" + text + "</li>";
    counter += 1;
}

function finish(num1) {
    "user strict";

    var idName = "item"+num1;
    var sap = document.getElementById(idName);
    sap.setAttribute("class", "strikethrough"); 
}