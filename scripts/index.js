import store from './store.js';
console.log(store);

import shoppingList from './shopping-list.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);