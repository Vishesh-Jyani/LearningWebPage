import groceryItems, { GroceryItem } from "./data.js";

const groceryListItems = document.querySelector('.grocery-list-items')
// Display static grocery items from dataset
groceryItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <div class="list-item-content">
    <span>${item.name}</span>
    <br>
    <span>Quantity: ${item.quantity}</span>
    </div>
    <button class="remove-button">
    Remove
    </button>
    `
    groceryListItems.appendChild(listItem);
})

const removeButtons = document.querySelectorAll(".remove-button")

// Remove logic
function removeItem(e) {
    const listItem = e.target.parentNode;
    listItem.remove();
}

removeButtons.forEach(button => button.addEventListener("click", removeItem))

// Add logic
const addItemButton = document.querySelector(".add-item")

const addItemForm = document.querySelector('.add-item-form');

addItemButton.addEventListener('click', (e)=>{
    e.stopPropagation()
    addItemForm.style.display = 'block'
})

document.addEventListener('click', (e)=>{
    if(e.target.closest('form') !== addItemForm)
        addItemForm.style.display = 'none'
})
