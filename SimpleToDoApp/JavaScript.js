function clickButton() {
    var text = document.getElementById("todoInput").value;
    document.getElementById("list").innerHTML += "<li>" + text + "</li>";
}