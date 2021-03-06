'use strict';

console.log(CategoryArray);
var form = document.getElementById('addcourseform');


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();


  var CourseName = event.target.CourseName.value;
  var CourseCategories = event.target.CourseCategories.value;
  var CourseLink = event.target.CourseLink.value;
  var Courseimage =event.target.Courseimage.value;
  var Coursedesc = event.target.Coursedesc.value;
  var Courseskills = event.target.Courseskills.value;
  var Courseprovider = event.target.Courseprovider.value;
  var CourseLevel = event.target.CourseLevel.value;

  var newCourseAdded = new Course(CourseName, CourseCategories, CourseLink, Courseimage, Coursedesc, Courseskills, Courseprovider, CourseLevel);
  CategoryArray[CourseCategories].CoursesArray.push(newCourseAdded);

  localStorage.setItem('CategoryArray', JSON.stringify(CategoryArray));
  window.open("index.html","_self");
  console.log(CategoryArray);
}
