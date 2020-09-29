/* eslint-disable no-undef */
'use strict';
var categories = document.getElementById('categories');
console.log(CategoryArray);
rendercategories();


function rendercategories() {

  var divcategories;
  var image;
  var headh5;
  for (var i = 0; i < CategoryArray.length; i++) {

    divcategories = document.createElement('div');
    divcategories.setAttribute('id', i);
    image = document.createElement('img');
    image.setAttribute('src', CategoryArray[i].image);
    image.setAttribute('id', i);

    headh5 = document.createElement('h5');
    headh5.textContent = CategoryArray[i].name;
    divcategories.appendChild(headh5);
    divcategories.appendChild(image);
    categories.appendChild(divcategories);
  }

}

categories.addEventListener('click', handleClickedCat);

function handleClickedCat(event) {
  event.preventDefault();
  console.log(event.target.id);


  localStorage.setItem('currentcategory', JSON.stringify(event.target.id));
  window.open("category.html");
}
