import groceryItems, { GroceryItem } from "./data.js";

const groceryListItems = document.querySelector('.grocery-list-items')

function addItemToGroceryList(groceryItem) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <div class="list-item-content">
    <span>${groceryItem.name}</span>
    <br>
    <span>Quantity: ${groceryItem.quantity}</span>
    </div>
    <button class="remove-button">
    Remove
    </button>
    `

    const removeButton = listItem.querySelector('.remove-button');
    removeButton.addEventListener('click',()=>{
        listItem.remove();
    })
    listItem.focus()
    groceryListItems.appendChild(listItem);
}
// Display static grocery items from dataset
groceryItems.forEach(item => addItemToGroceryList(item))

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

addItemForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const itemName = addItemForm.querySelector("input[name='item-name']");
    const itemQuantity = addItemForm.querySelector("input[name='item-quantity']");
    if(!itemName.value || !itemQuantity.value){
        alert('Please fill the form correctly!')
        return;
    }
    addItemToGroceryList(new GroceryItem(itemName.value, itemQuantity.value));
    itemName.value = '';
    itemQuantity.value = '';
    addItemForm.style.display = 'none'
})
