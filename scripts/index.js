/* eslint-disable indent */
import store from './store.js';
import item from './item.js';

console.log(store);

import shoppingList from './shopping-list.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);