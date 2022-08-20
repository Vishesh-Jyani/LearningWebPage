export class GroceryItem {
    constructor(name, quantity){
        this.name = name;
        this.quantity = quantity;
    }
}

const groceryItems = [
    new GroceryItem('Apples', 10),
    new GroceryItem('Bananas', 6),
    new GroceryItem('Oranges', 12),
    new GroceryItem('Strawberries', 5),
    new GroceryItem('Mangoes', 8),
    new GroceryItem('Grapes', 25),
    new GroceryItem('Tomatoes', 12),
    new GroceryItem('Toothpaste', 1),
    new GroceryItem('Combs', 1),
    new GroceryItem('T-shirts', 5),
]

export default groceryItems;