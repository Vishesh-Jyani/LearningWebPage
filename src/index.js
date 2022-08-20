import groceryItems, { GroceryItem } from "./data.js";

const groceryListItems = document.querySelector('.grocery-list-items')

groceryItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <div class="list-item-content">
    <span>${item.name}</span>
    <br>
    <span>Quantity: ${item.quantity}</span>
    </div>
    `
    groceryListItems.appendChild(listItem);
})