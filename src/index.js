import groceryItems, { GroceryItem } from "./data.js";
import { enableScroll, disableScroll } from "./controlScroll.js";
const groceryListItems = document.querySelector('.grocery-list-items')

function addItemToGroceryList(groceryItem, notInitialRender) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <div class="list-item-content">
    <span>${groceryItem.name}</span>
    <br>
    <span>Quantity: ${groceryItem.quantity}</span>
    </div>
    <button class="remove-button">
    ❎
    </button>
    `
// 🗑️
    const removeButton = listItem.querySelector('.remove-button');
    removeButton.addEventListener('click',()=>{
        listItem.style.opacity = '0'
        listItem.style.transition = 'opacity 300ms ease-in-out'
        listItem.addEventListener('transitionend',()=>{
            listItem.remove();
        },{once: true})
    })
    if(notInitialRender){
        listItem.style.animation = 'noticeMe 1000ms ease-in-out 2'
        setTimeout(()=>listItem.scrollIntoView({behavior: 'smooth', block: 'center'}),0)

    }
    
    groceryListItems.appendChild(listItem);
}
// Display static grocery items from dataset
groceryItems.forEach(item => addItemToGroceryList(item))

// Add logic
const addItemButton = document.querySelector(".add-item")

const addItemForm = document.querySelector('.add-item-form');
const formBg = document.querySelector('.form-bg');
const addItemCross = addItemForm.querySelector(".cross-icon");

addItemCross.addEventListener('click', (e)=>{
    const itemName = addItemForm.querySelector("input[name='item-name']");
    const itemQuantity = addItemForm.querySelector("input[name='item-quantity']");
    itemName.value = '';
    itemQuantity.value = '';
    addItemForm.style.display = 'none'
    formBg.style.display = 'none'
    enableScroll();
})

addItemButton.addEventListener('click', (e)=>{
    e.stopPropagation()
    addItemForm.style.display = 'block'
    formBg.style.display = 'block'
    disableScroll();
})

document.addEventListener('click', (e)=>{
    if(e.target.closest('form') !== addItemForm){
        addItemForm.style.display = 'none'
        formBg.style.display = 'none'
        enableScroll();
    }  
})

addItemForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const itemName = addItemForm.querySelector("input[name='item-name']");
    const itemQuantity = addItemForm.querySelector("input[name='item-quantity']");
    if(!itemName.value || !itemQuantity.value){
        alert('Please fill the form correctly!')
        return;
    }
    addItemToGroceryList(new GroceryItem(itemName.value, itemQuantity.value), true);
    itemName.value = '';
    itemQuantity.value = '';
    addItemForm.style.display = 'none'
    formBg.style.display = 'none'
    enableScroll();
})

