// get the html elements using their ids and assigning them to variables
const itemList = document.getElementById("item-list");
const addButton = document.getElementById("add-button");
const input = document.getElementById("new-item");
let deleteAllButton;

// Add new items using the javascript methods and also the delete button
function addItem() {
  const newItem = document.createElement("li");
  const itemText = document.createTextNode(input.value);
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";

  newItem.appendChild(itemText);
  newItem.appendChild(deleteButton);
  itemList.appendChild(newItem);

  // Reset input field after adding item
  input.value = "";

  // Add event listener to delete button
  deleteButton.addEventListener("click", deleteItem);

  // Add delete all button if there are more than one items in the list and the button doesn't exist yet
  if (itemList.children.length > 1 && !deleteAllButton) {
    deleteAllButton = document.createElement("button");
    deleteAllButton.id = "delete-all-button";
    deleteAllButton.innerHTML = "Delete All";
    deleteAllButton.addEventListener("click", deleteAllItems);
    document.getElementsByTagName("section")[0].appendChild(deleteAllButton);
  }
}

// Remove item from the list
function deleteItem(event) {
  const item = event.target.parentNode;
  itemList.removeChild(item);

  // Remove delete all button if there are less than or equal to one item in the list
  if (itemList.children.length <= 1 && deleteAllButton) {
    deleteAllButton.parentNode.removeChild(deleteAllButton);
    deleteAllButton = null;
  }
}

// Remove all items from the list
function deleteAllItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  // Remove delete all button
  if (deleteAllButton) {
    deleteAllButton.parentNode.removeChild(deleteAllButton);
    deleteAllButton = null;
  }
}

// Add event listener to add button
addButton.addEventListener("click", addItem);

// Add event listener for Enter key on keyboard
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("add-button").click();
  }
});
