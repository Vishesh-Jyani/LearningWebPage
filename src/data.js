export class GroceryItem {
    constructor(name, quantity){
        this.name = name;
        this.quantity = quantity;
    }
}

const groceryItems = [
    new GroceryItem('Apple', 10),
    new GroceryItem('Banana', 6),
    new GroceryItem('Orange', 12)
]

export default groceryItems;