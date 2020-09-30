'use strict';

var currentcategory = CategoryArray[JSON.parse(localStorage.getItem('currentcategory'))];

var currentcourse =currentcategory.CoursesArray[ JSON.parse(localStorage.getItem('currentcourse'))];

console.log(currentcourse);

////////////////////  Course Elements ID //////////////////////

var courseName = document.getElementById('CourseName');
var courseDescription = document.getElementById('Course-Description');
var SkillsGain = document.getElementById('SkillsGain');
var skills = currentcourse.skills.split(',');
var provider = document.getElementById('provider');
var button = document.getElementById('button');
//////////////////// End Course Elements ID //////////////////////


courseName.textContent=currentcourse.name;

courseDescription.textContent=currentcourse.description;
provider.textContent=' Provide By  :  '+currentcourse.provider;

for (var i = 0; i < skills.length; i++) {
  var li = document.createElement('li');
  li.textContent = skills[i];
  SkillsGain.appendChild(li);
}


button.addEventListener('click',buttonclickedCourse);

function buttonclickedCourse(event){
  event.preventDefault();

  window.open(currentcourse.link);

}
