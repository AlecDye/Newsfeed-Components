/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// --- function to create new list items ---
function createMenu(menuItems) {
  const menu = document.createElement('div');
  const list = document.createElement('ul');
  // --- create li and add them to list ---
  menuItems.forEach(item => {
    let listItem = document.createElement('li');
    listItem.textContent = item;
    list.append(listItem);
  });
  menu.append(list);
  // --- styles ---
  menu.classList.add('menu');
  // --- toggle event ---
  const buttonMenu = document.querySelector('.menu-button');
  buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  })
  // --- return function ---
  return menu;
};

// --- call the function ---
const navAnchor = document.querySelector('.header');
menuItems.forEach(item => {
  navAnchor.append(createMenu(menuItems));
})

// function createPopOutMenu(menuItems) {

//   // --- creating elements ---
//   const menu = document.createElement('div');
//   const list = document.createElement('ul');
//   // const listItem = document.createElement('li');


//   // --- structure of elements ---
//   menu.append(list);
//   // list.append(listItem);

//   // --- styling elements ---
//   menu.classList.add('menu');

//   // --- ieration ---
//   menuItem.forEach(item => {
//     let menuItem = document.querySelector('li');
//     menuItem.textContent = item;
//     list.appendChild(menuItem);
//   });

//   // // -- styling li ---
//   // menuItem.classList.add('menu ul li');

//   const buttonMenu = document.querySelector('.menu-button');
//   buttonMenu.addEventListener('click', () => {
//     menu.classList.toggle('menu--open');
//   })

//   return menu;
// };

// const menuImg = document.querySelector('.menu-button');
// menuItems.forEach(data => {
//   menuImg.append(createPopOutMenu(menuItems))
// })
