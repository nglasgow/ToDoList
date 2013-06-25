var todoinput = document.getElementById ("todoinput");
var todobutton = document.getElementById ("todobutton");
var list = document.getElementById ("list");

todobutton.onclick = function() {
  var newItem = todoinput.value;
  var row = document.createElement("li");
  
  var listCheckbox = document.createElement("input");
  listCheckbox.type = "checkbox";
  listCheckbox.className = "checkbox";
  listCheckbox.onclick = removeItem;
  row.appendChild(listCheckbox);
  
  var listText = document.createElement("p")
  listText.textContent = newItem;
  row.appendChild(listText);
  
  list.appendChild(row);
  
};

var removeItem = function (event) {
  var parent = this.parentNode;
  list.removeChild(parent);
};