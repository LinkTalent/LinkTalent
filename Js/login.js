'use strict';

var loginform = document.getElementById('loginpage');


var adminarray = {
  'a': 'a',
  'tamara':'ab',
};
loginform.addEventListener('submit', handleSubmit);


function handleSubmit(event){
  event.preventDefault();

  var username =event.target.uname.value;
  var password=  event.target.psw.value;


  if (adminarray[username]===password){
    console.log('login');
    window.open("cpanle.html","_self");

  }else{

    console.log('else');
  }

}

