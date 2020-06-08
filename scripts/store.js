/* eslint-disable indent */
import item from './item.js';

const foo = 'bar';

const items = [];
const hideCheckedItems = false;

  export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
  };

  console.log(item);

  function findById(id) {
    const found = items.find(item => item.id === id);
    return found;
  };

  function addItem(name) {
    try {
      item.validateName(name);
      this.items.push(newItem);
    } catch(error) {
      console.log(`Cannot add item: ${error.message}`);
    }
  }

  function findAndToggleChecked(id) {
    const itemToCheck = this.findById(id);
    itemToCheck.checked = !itemToCheck.checked;
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

  function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
  }