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

if (localStorage.getItem('CategoryArray')) {

  CategoryArray = JSON.parse(localStorage.getItem('CategoryArray'));
} else {

  var ComputerScience = new Category('Computer Science', 'images/ComputerScience.png');
  var English = new Category('English Language', 'images/englishcat.png');
  var GrapghicDesign = new Category('Grapghic Design', 'images/GrapghicDesign.png');
  var BussinseMarkting = new Category('Bussinse & Markting', 'images/BussinseMarkting.png');
  var HumanResources = new Category('Human Resorces', 'images/HumanResorces.png');
  var Engineering = new Category('Engineering', 'images/eng.png');
  var Photography = new Category('Photography', 'images/photog.png');
  var MicrosoftTools = new Category('Microsoft Tools', 'images/MicrosoftTools.png');


  /////////////  Computer Science Courses ////////////////////
  var cs = new Course('Computer Science CS050', 'ComputerScience', 'https://lagunita.stanford.edu/courses/Engineering/CS101/Summer2014/about', 'images/itroduction_to_computer_science.svg', 'This is CS50x , Harvard University introduction to the intellectual enterprises of computer science and the art of programming for majors and non-majors alike, with or without prior programming experience. An entry-level course taught by David J. Malan, CS50x teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation', 'C, Python, SQL, JavaScript plus CSS and HTML', 'EDX', '1');
  var cs1 = new Course('Discrete Structures', 'ComputerScience', 'https://www.coursera.org/learn/what-is-a-proof', 'images/Discrete_Structures.svg', 'Mathematical thinking is crucial in all areas of computer science: algorithms, bioinformatics, computer graphics, data science, machine learning, etc. In this course, we will learn the most important tools used in discrete mathematics: induction, recursion, logic, invariants, examples, optimality. We will use these tools to answer typical programming questions like: How can we be certain a solution exists? Am I sure my program computes the optimal answer? Do each of these objects meet the given requirements?In the course, we use a try-this-before-we-explain-everything approach: you will be solving many interactive (and mobile friendly) puzzles that were carefully designed to allow you to invent many of the important ideas and concepts yourself.', 'learn basic functions , know how to analyse of recursive functions', 'coursera', '1');
  var cs2 = new Course('Web Development', 'ComputerScience', 'https://www.coursera.org/specializations/web-applications', 'images/Web_Development.svg', 'This Specialization is an introduction to building web applications for anybody who already has a basic understanding of responsive web design with JavaScript, HTML, and CSS. Web Applications for Everybody is your introduction to web application development. You will develop web and database applications in PHP, using SQL for database creation, as well as functionality in JavaScript, jQuery, and JSON.', 'Jquery,web application development,Hypertext Preprocessor (PHP),JavaScript,MySQL,Html,Cascading Style Sheets (CCS),Phpmyadmin,Relational Database,SQL Create  Read Update And Delete', 'coursera', '2');
  var cs3 = new Course('Introduction to Self-Driving Cars', 'ComputerScience', 'https://www.coursera.org/learn/intro-self-driving-cars', 'images/driverless_news.jpg', 'Welcome to Introduction to Self-Driving Cars, the first course in University of Toronto’s Self-Driving Cars Specialization. you will develop control code to navigate a self-driving car around a racetrack in the CARLA simulation environment. You will construct longitudinal and lateral dynamic models for a vehicle and create controllers that regulate speed and path tracking performance using Python. You’ll test the limits of your control design and learn the challenges inherent in driving at the limit of vehicle performance.', 'Understand commonly used hardware used for self-driving cars,Identify the main components of the self-driving software stack,Program vehicle modelling and control ,Analyze the safety frameworks and current industry practices for vehicle development', 'coursera', '3');
  var cs4 = new Course('Mathematics for Machine Learning', 'ComputerScience', 'https://www.coursera.org/specializations/mathematics-machine-learning', 'images/MLM-logo.svg', 'For a lot of higher level courses in Machine Learning and Data Science, you find you need to freshen up on the basics in mathematics - stuff you may have studied before in school or university, but which was taught in another context, or not very intuitively, such that you struggle to relate it to how it’s used in Computer Science. This specialization aims to bridge that gap, getting you up to speed in the underlying mathematics, building an intuitive understanding, and relating it to Machine Learning and Data Science.', 'Implement mathematical concepts using real-world data,Derive PCA from a projection perspective,Understand how orthogonal projections work,Master PCA', 'coursera', '1');

  //////////////////////////////////////////////////////////////////

  //////////////////////////////// English Course //////////////////
  var e1 = new Course('Write Professional Emails in English', 'English', 'https://www.coursera.org/learn/professional-emails-english', 'images/englishwrite.png', 'This is a course to help you write effective business emails in English. This course is unique because each module will provide tips on writing more professional emails as well as lessons to improve your overall English writing skills. Therefore, you will improve your grammar and vocabulary skills for email writing and also improve your cross cultural knowledge to make you more powerful and successful in your business communication. You will look at different email formats to analyze tone, formality levels, and various organizational styles. You will be able to improve your emails of introduction, announcements, requests and emails that apologize or revise a request. In this course you will write and revise 4–5 emails, complete several comprehension quizzes and review the emails of other participants', 'Professional,Email Writing,Communication,Writing', 'coursera', '1');
  var e2 = new Course('Business English Communication Skills', 'English', 'https://www.coursera.org/specializations/business-english', 'images/businessenglishcommunication.png', 'This Specialization is designed to teach you to communicate effectively in English in professional contexts. You will expand your English vocabulary, improve your ability to write and speak in English in both social and professional interactions, and learn terminology and skills that you can apply to business negotiations, telephone conversations, written reports and emails, and professional presentations.', 'Business Plan,English Language,Meeting,Presentation,Email Writing,Business Communication,Communication,Professional,Writing,Negotiation,Planning,Language', 'coursera', '2');
  var e3 = new Course('TESOL Certificate : Teach English Now', 'English', 'https://www.coursera.org/specializations/tesol', 'images/teslop1.png', 'This specialization is the first of two specializations that make up the TESOL Certificate from Arizona State University. In this specialization, you will learn about the basic foundational principles of language acquisition and the basic techniques founded upon those principles. It will describe second or foreign language theories, and basic studies in second language acquisition and their pedagogical implications. It will elaborate upon basic design for lesson plans and provide access to professional resources. In the final Capstone Project, in collaboration with Arizona State University’s Global Launch, you will apply the skills you learned by designing a lesson plan which includes learning outcomes, assessments, materials, classroom management techniques and the learning activities themselves. When you complete this specialization, go on to the second specialization in order to complete your TESOL certificate experience!', 'Education,Online Learning', 'coursera', '3');
  var e4 = new Course('English Writing Skills', 'English', 'https://www.edraak.org/en/course/course-v1:Edraak+EW101+T3_2018', 'images/englishwritingskills.png', 'You would need this course if you are entering University or the job market and is struggling with writing essays, graduation projects, reports, giving presentations and sending emails for work. If any of these are the challenge you face, take this course and find out how it will help you progress.', 'Design an effective speech,Give a presentation', 'Edrak', '2');


  /////////////////////////////////////////////////////////////////

  //////////////////////////////// GrapghicDesign Course //////////////////
  var gd1 = new Course('introduction to graphic design', 'GrapghicDesign', 'https://www.edraak.org/en/course/course-v1:Edraak+GD101+T1_2108', 'images/introductiontographicdesign.jpg', 'In this introductory course on the basics of graphic design participants will understand general visual communication concepts and tools in addition to the fundamentals of composition, color, typography and other design elements.', 'Graphic harmony and repetition,Information about design programs such as Photoshop (Photoshop)and InDesign and Illustrator (Illustrator),Animation techniques with practical examples of some animation,programs such as Toon Boom,Arabic calligraphy, Latin and Arabic printing,Learn research processes developing ideas  sketching  and working with visual referen', 'Edraak', '1');
  var gd2 = new Course('Graphic Design Masterclass ', 'GrapghicDesign', 'https://www.udemy.com/course/graphic-design-masterclass-the-next-level/', 'images/graphicdesignmasterclass.jpg', 'Who should take this class? Those with very basic skills in Adobe Photoshop and Illustrator. You already may be familiar with the pen tool basics understand the layering system and know a few other basic tools. You have a little experience using these programs and have a solid basic working knowledge of these programs.', 'You will be able to create polished and practical Logo designs and brand assets,Produce complex photo manipulations for the use of ad design and understand solid layout and design principles,Be able to create images for a full digital marketing campaign including Facebook and Instagram,Create realistic shadows and be able to do intermediate level photo retouching', 'coursera', '2');

  /////////////////////////////////////////////////////////////////


  var democourse1 = new Course('Demo Course', 'Demo Course', 'https://drive.google.com/file/d/1XEpEI-J9sNQggUWKu_f7sp-GBTQbJwGV/view?usp=sharing', 'images/democourse.jpg', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nasceiverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc', 'Demo,Demo,Demo,Demo', 'Demo LinkTalent', '1');
  var democourse2 = new Course('Demo Course', 'Demo Course', 'https://drive.google.com/file/d/1XEpEI-J9sNQggUWKu_f7sp-GBTQbJwGV/view?usp=sharing', 'images/democourse.jpg', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nasce, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc', 'Demo,Demo,Demo,Demo', 'Demo LinkTalent', '2');
  var democourse3 = new Course('Demo Course', 'Demo Course', 'https://drive.google.com/file/d/1XEpEI-J9sNQggUWKu_f7sp-GBTQbJwGV/view?usp=sharing', 'images/democourse.jpg', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur rileo linte, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc', 'Demo,Demo,Demo,Demo', 'Demo LinkTalent', '3');

  ComputerScience.addCourse(cs); ComputerScience.addCourse(cs1); ComputerScience.addCourse(cs2); ComputerScience.addCourse(cs3); ComputerScience.addCourse(cs4);

  English.addCourse(e1); English.addCourse(e2); English.addCourse(e3); English.addCourse(e4);

  GrapghicDesign.addCourse(gd1); GrapghicDesign.addCourse(gd2);

  BussinseMarkting.addCourse(democourse1); BussinseMarkting.addCourse(democourse1); BussinseMarkting.addCourse(democourse2); BussinseMarkting.addCourse(democourse3);
  HumanResources.addCourse(democourse1); HumanResources.addCourse(democourse3);
  Engineering.addCourse(democourse2); Engineering.addCourse(democourse3);
  Photography.addCourse(democourse1); Photography.addCourse(democourse2); Photography.addCourse(democourse2); Photography.addCourse(democourse3);

  MicrosoftTools.addCourse(democourse3); MicrosoftTools.addCourse(democourse3); MicrosoftTools.addCourse(democourse1);
}
