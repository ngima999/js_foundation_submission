/* eslint-disable no-unused-vars */

class VM {
  
  constructor(inventory) {
    this.inventory = inventory; 
  }

  //Method to handle the sale of an item based on its itemID
  sale(itemID) {
    //Check if the item exists in the inventory and if it is in stock
    if (this.inventory[itemID] && this.inventory[itemID].stock > 0) {
      this.inventory[itemID].stock--; //Decrease the stock by 1 if the item is available
      return `1 ${this.inventory[itemID].name} - Thank you and come again!`; //Return a message confirming the sale
    } else {
      return `Item not available`; //Return a message if the item is out of stock or doesn't exist
    }
  }

  //Method to get the total number of items in stock in the vending machine
  stockTotal() {
    //Use reduce to calculate the total number of items left in stock
    const totalStock = Object.values(this.inventory)
      .reduce((total, item) => total + item.stock, 0);
    
    //Return a message with the total stock or 'Out of Stock' if there's none
    return totalStock > 0 ? `${totalStock} item(s)` : 'Out of Stock';
  }
}

  