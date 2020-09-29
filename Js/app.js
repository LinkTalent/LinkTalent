'use strict';

var CategoryArray = [];
var CourseArray = [];

var Category = function (name, image) {
  this.name = name;
  this.image = image;
  this.CoursesArray = [];
  CategoryArray.push(this);

};

Category.prototype.addCourse = function (course) {

  this.CoursesArray.push(course);
};


var Course = function (name, CategoryName, link, image, description, skills, provider, level) {
  this.name = name;
  this.CategoryName = CategoryName;
  this.description = description;
  this.link = link;
  this.image = image;
  this.skills = skills;
  this.provider = provider;
  this.level = level;
  CourseArray.push(this);
};

if(localStorage.getItem('CategoryArray')){

  CategoryArray = JSON.parse(localStorage.getItem('CategoryArray'));
}else{

  var ComputerScience = new Category('Computer Science', 'images/Tech.png');
  var English = new Category('English', 'images/Tech.png');
  var GrapghicDesign = new Category('Grapghic Design', 'images/GraphicDesign.svg');
  var BussinseMarkting = new Category('Bussinse & Markting', 'images/Business.svg');
  var HumanResorces = new Category('Human Resorces', 'images/Human_Resources.svg');
  var Engineering = new Category('Engineering', 'images/Tech.png');
  var Photography = new Category('Photography', 'images/GraphicDesign.svg');
  var MicrosoftTools = new Category('Microsoft Tools', 'images/Tech.png');



  var cs = new Course('Cs050', 'ComputerScience', 'https://css-tricks.com/forums/topic/adding-href-to-button/', 'images/Tech.png', 'This module aims to provide an overvieThis module aims to provide an overview of the basicThis module aims to provide an overview of the basicThis module aims to provide an overview of the basicThis module aims to provide an overview of the basicThis module aims to provide an overview of the basicThis module aims to provide an overview of the basicThis module aims to provide an overview of the basicw of the basic concepts of discrete mathematics which are relevant in the field of Computer Science. The topics covered includeThis module aims to provide an overview of the basic concepts of discrete mathematics which are relevant in the field of Computer Science. The topics covered include', 'Computer code , computer hardware , Computer security', 'coursera', '1');
  var cs1 = new Course('Cs050 inter', 'ComputerScience', 'https://online.stanford.edu/lagunita-learning-platform', 'images/Tech.png', 'desss', 'Computer code , computer hardware , Computer security', 'coursera', '2');
  var cs2 = new Course('DBA', 'ComputerScience', 'https://online.stanford.edu/lagunita-learning-platform', 'images/Tech.png', 'desss', 'Computer code , computer hardware , Computer security', 'coursera', '1');
  var cs3 = new Course('Cs050', 'ComputerScience', 'https://online.stanford.edu/lagunita-learning-platform', 'images/Tech.png', 'desss', 'Computer code , computer hardware , Computer security', 'coursera', '3');
  var cs4 = new Course('Cs050', 'ComputerScience', 'https://online.stanford.edu/lagunita-learning-platform', 'images/Tech.png', 'desss', 'Computer code , computer hardware , Computer security', 'coursera', '1');
  var cs5 = new Course('Cs050', 'ComputerScience', 'https://online.stanford.edu/lagunita-learning-platform', 'images/Tech.png', 'desss', 'Computer code , computer hardware , Computer security', 'coursera', '1');


  ComputerScience.addCourse(cs); ComputerScience.addCourse(cs1); ComputerScience.addCourse(cs2); ComputerScience.addCourse(cs3);

  English.addCourse(cs); English.addCourse(cs1); English.addCourse(cs1); English.addCourse(cs1); English.addCourse(cs1);

  GrapghicDesign.addCourse(cs); GrapghicDesign.addCourse(cs1); GrapghicDesign.addCourse(cs2); GrapghicDesign.addCourse(cs3); GrapghicDesign.addCourse(cs4);

  BussinseMarkting.addCourse(cs); BussinseMarkting.addCourse(cs1); BussinseMarkting.addCourse(cs2); BussinseMarkting.addCourse(cs3);

  HumanResorces.addCourse(cs5);

}