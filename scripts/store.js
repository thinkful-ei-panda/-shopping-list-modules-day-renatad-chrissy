/* eslint-disable indent */
import item from './item.js';
const items = [];
const hideCheckedItems = false;

  function findById(id) {
    const found = items.find(item => item.id === id);
    return found;
  };

  const addItem = function(name) {
    try {
      item.validateName(name);
      const newItem = this.items.push(newItem);
    } catch(error) {
      console.log(`Cannot add item: ${error.message}`);
    }
  }

  function findAndUpdateName(id, newName) {
    try {
      item.validateName(newName);
      const foundName = this.findById(id);
    } catch(error) {
      console.log(`Cannot update name: ${error.message}.`);
    }
  }

  function findAndDelete(id) {
    const itemToDelete = this.items.findIndex(item => item.id === id);
    this.items.splice(itemToDelete, 1);
  }

  const findAndToggleChecked = function(id) {
    const itemToCheck = this.findById(id);
    itemToCheck.checked = !itemToCheck.checked;
  }

  // const toggleCheckedFilter = function() {
  //   this.hideCheckedItems = !this.hideCheckedItems;
  // };

  const toggleCheckedFilter = function(id) {
    const foundItem = this.items.find(item => item.id === id);
    foundItem.checked = !foundItem.checked;
  };
  
  

  export default {
    findAndDelete,
    findAndToggleChecked,
    findAndUpdateName,
    addItem,
    findById,
    toggleCheckedFilter,
    items,
    hideCheckedItems
  };