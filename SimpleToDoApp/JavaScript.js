var counter = 0;

function clickButton() {
    var text = document.getElementById("todoInput").value;
    document.getElementById("list").innerHTML += "<li id = 'rock" + counter + "' onclick=\"finish("+counter+");\">" + text + "</li>";
    counter += 1;
}

function finish(num1) {
    var idName = "rock"+num1;
    var sap = document.getElementById(idName);
    sap.setAttribute("class", "strikethrough");
    //document.getElementById("rock).setAttribute("class", "strikethrough");


   
}