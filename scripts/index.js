import store from './store.js';
console.log();

import shoppingList from './shopping-list.js';


const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);