// Browser Storage Shopping Cart

 

// Objective:
// In this assignment, you will use your knowledge of JavaScript and browser storage (localStorage and sessionStorage) to create a simple shopping cart that allows users to add, remove, and display items. The cart should persist across browser sessions using localStorage.


// Instructions:
// Create an HTML file called cart.html with a simple structure that includes a form to add items to the cart and a button to display the cart contents.
// Create a file called cartApp.js and link it to cart.html.
// In cartApp.js, write a script that does the following:
// Create a function called initializeCart that checks if there's a cart in localStorage; if not, it initializes an empty cart and stores it in localStorage.
// Create a function called addItem that takes an item object as a parameter, retrieves the cart from localStorage, adds the item to the cart, and then stores the updated cart back into localStorage.
// Create a function called removeItem that takes an item id as a parameter, retrieves the cart from localStorage, removes the item with the given id from the cart, and then stores the updated cart back into localStorage.
// Create a function called displayCart that retrieves the cart from localStorage and logs the cart contents to the console.
// Create event listeners for the add item form and display cart button to call the respective functions.

//  let arrObj;
//  localStorage.setItem('array', arrObj);
// localStorage.setItem("keyed", "valued");
// let myItem = localStorage.getItem('array');
//console.log(localStorage.getItem('array'));
//localStorage.clear();
// localStorage.setItem("cart", 'red');

let testObject = {
    id: 1234,
    name: 'testObject',
    price: 9.99,
  };

initializeCart();
// addItem(testObject); // testing function
// removeItem(1234); // testing function
// displayCart();  // testing function
function initializeCart() {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }


function addItem(item) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

function displayCart(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach(element => {
        console.log(element);
    });
}

let addItemButton = document.getElementById("addItemForm")

addItemButton.addEventListener("submit", function(event) {
    event.preventDefault();
    let itemID = Math.random();
    let itemName = document.getElementById("itemName").value;
    let itemPrice = document.getElementById("itemPrice").value;
    let combinedObject = { id: itemID, name: itemName, price: itemPrice};
    addItem(combinedObject);
  })

let displayCartButton = document.getElementById("displayCartButton")

 displayCartButton.addEventListener("click", function() {
    displayCart();
  });