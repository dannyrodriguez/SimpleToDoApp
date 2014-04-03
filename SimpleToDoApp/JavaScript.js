var counter = 0;

function clickButton() {
    var text = document.getElementById("todoInput").value;
    document.getElementById("list").innerHTML += "<li id = 'rock" + counter + "' onclick=\"finish("+counter+");\">" + text + "</li>";
    counter += 1;
}

function finish(counter) {
    var idName = "rock"+counter+"";
    document.getElementById(idName).setAttribute("style", "text-decoration: line-through;");


   
}