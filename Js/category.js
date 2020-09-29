'use strict';

var currentcategory = CategoryArray[JSON.parse(localStorage.getItem('currentcategory'))];

console.log(currentcategory);


var categories;
var divccourses;
var image;
var headh5;

for (var i = 0; i < currentcategory.CoursesArray.length; i++) {

  if (currentcategory.CoursesArray[i].level == 1) {
    categories = document.getElementById('BasicLevel');
    divccourses = document.createElement('div');

    image = document.createElement('img');
    image.setAttribute('src', currentcategory.CoursesArray[i].image);

    headh5 = document.createElement('h5');
    headh5.textContent = currentcategory.CoursesArray[i].name;
    divccourses.appendChild(headh5);
    divccourses.appendChild(image);
    categories.appendChild(divccourses);

  } else if (currentcategory.CoursesArray[i].level == 2) {

    categories = document.getElementById('IntermediateLevel');
    divccourses = document.createElement('div');
    image = document.createElement('img');
    image.setAttribute('src', currentcategory.CoursesArray[i].image);

    headh5 = document.createElement('h5');
    headh5.textContent = currentcategory.CoursesArray[i].name;
    divccourses.appendChild(headh5);
    divccourses.appendChild(image);
    categories.appendChild(divccourses);

  } else if (currentcategory.CoursesArray[i].level == 3) {

    categories = document.getElementById('AdvancedLevel');
    divccourses = document.createElement('div');
    image = document.createElement('img');
    image.setAttribute('src', currentcategory.CoursesArray[i].image);

    headh5 = document.createElement('h5');
    headh5.textContent = currentcategory.CoursesArray[i].name;
    divccourses.appendChild(headh5);
    divccourses.appendChild(image);
    categories.appendChild(divccourses);

  }

}
