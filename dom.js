var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Adding event listener to delete button
itemList.addEventListener("click", removeItem);
// Filter Event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  //to prevent normal submission
  e.preventDefault();

  //Get input value. document.getElementById("item") will grab the actual element. Adding .value will grab the value of the element.
  var newItem = document.getElementById("item").value;

  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // Append text node ()
  deleteBtn.appendChild(document.createTextNode("x"));

  // Appending the delete button to our new li.
  li.appendChild(deleteBtn);

  //Append li to list
  itemList.appendChild(li);
}

// Remove Item Function
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure, my dude?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li); //in our item list, remove child (part of it) li (list item)
    }
  }
}

// Filter Items aka SEARCH
function filterItems(e) {
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get list of items
  var items = itemList.getElementsByTagName("li");
  // Convert our list of items from HTML collection to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    console.log(itemName);
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
