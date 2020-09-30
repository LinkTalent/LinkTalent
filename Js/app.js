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

  var ComputerScience = new Category('Computer Science', 'images/ComputerScience.png');
  var English = new Category('English Language', 'images/English.png');
  var GrapghicDesign = new Category('Grapghic Design', 'images/GrapghicDesign.png');
  var BussinseMarkting = new Category('Bussinse & Markting', 'images/BussinseMarkting.png');
  var HumanResources = new Category('Human Resorces', 'images/HumanResorces.png');
  var Engineering = new Category('Engineering', 'images/Engineering.png');
  var Photography = new Category('Photography', 'images/Photography.png');
  var MicrosoftTools = new Category('Microsoft Tools', 'images/MicrosoftTools.png');



  var cs = new Course('Computer Science CS050', 'ComputerScience', 'https://lagunita.stanford.edu/courses/Engineering/CS101/Summer2014/about', 'images/itroduction_to_computer_science.svg', 'This is CS50x , Harvard University introduction to the intellectual enterprises of computer science and the art of programming for majors and non-majors alike, with or without prior programming experience. An entry-level course taught by David J. Malan, CS50x teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation', 'C, Python, SQL, JavaScript plus CSS and HTML', 'EDX', '1');
  var cs1 = new Course('Discrete Structures', 'ComputerScience', 'https://www.coursera.org/learn/what-is-a-proof', 'images/Discrete_Structures.svg', 'Mathematical thinking is crucial in all areas of computer science: algorithms, bioinformatics, computer graphics, data science, machine learning, etc. In this course, we will learn the most important tools used in discrete mathematics: induction, recursion, logic, invariants, examples, optimality. We will use these tools to answer typical programming questions like: How can we be certain a solution exists? Am I sure my program computes the optimal answer? Do each of these objects meet the given requirements?In the course, we use a try-this-before-we-explain-everything approach: you will be solving many interactive (and mobile friendly) puzzles that were carefully designed to allow you to invent many of the important ideas and concepts yourself.', 'learn basic functions , know how to analyse of recursive functions', 'coursera', '1');
  var cs2 = new Course('Web Development', 'ComputerScience', 'https://www.coursera.org/specializations/web-applications', 'images/Web_Development.svg', 'This Specialization is an introduction to building web applications for anybody who already has a basic understanding of responsive web design with JavaScript, HTML, and CSS. Web Applications for Everybody is your introduction to web application development. You will develop web and database applications in PHP, using SQL for database creation, as well as functionality in JavaScript, jQuery, and JSON.', 'Jquery,web application development,Hypertext Preprocessor (PHP),JavaScript,MySQL,Html,Cascading Style Sheets (CCS),Phpmyadmin,Relational Database,SQL Create  Read Update And Delete', 'coursera', '2');
  var cs3 = new Course('Cs050', 'ComputerScience', 'https://online.stanford.edu/lagunita-learning-platform', 'images/Tech.png', 'desss', 'Computer code , computer hardware , Computer security', 'coursera', '3');
  var cs4 = new Course('Cs050', 'ComputerScience', 'https://online.stanford.edu/lagunita-learning-platform', 'images/Tech.png', 'desss', 'Computer code , computer hardware , Computer security', 'coursera', '1');
  var cs5 = new Course('Cs050', 'ComputerScience', 'https://online.stanford.edu/lagunita-learning-platform', 'images/Tech.png', 'desss', 'Computer code , computer hardware , Computer security', 'coursera', '1');


  ComputerScience.addCourse(cs); ComputerScience.addCourse(cs1); ComputerScience.addCourse(cs2); ComputerScience.addCourse(cs3);

  English.addCourse(cs); English.addCourse(cs1); English.addCourse(cs1); English.addCourse(cs1); English.addCourse(cs1);

  GrapghicDesign.addCourse(cs); GrapghicDesign.addCourse(cs1); GrapghicDesign.addCourse(cs2); GrapghicDesign.addCourse(cs3); GrapghicDesign.addCourse(cs4);

  BussinseMarkting.addCourse(cs); BussinseMarkting.addCourse(cs1); BussinseMarkting.addCourse(cs2); BussinseMarkting.addCourse(cs3);

  HumanResources.addCourse(cs5);

}
