let oldElement = document.getElementById("list").children[0];
let newElement = document.createElement("li");
let newValue = document.createTextNode("Guava");
newElement.appendChild(newValue);
document.getElementById("list").replaceChild(newElement, oldElement);
function removeListItem() {
    var list = document.getElementById("list");
    var itemToRemove = list.children[1]; // Get the second child (position 1)
    if (itemToRemove) {
        list.removeChild(itemToRemove);
    }
}