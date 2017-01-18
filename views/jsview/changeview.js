//afficher l'inscription


function switchDisplaySignUp(){
  var search = document.getElementById('searcharea');
  var signup = document.getElementById('signup');
  var signin = document.getElementById('signin');
  search.style.display = 'none';
  signup.style.display = '';
  signin.style.display = 'none';
}

function switchDisplaySignIn(){
  var search = document.getElementById('searcharea');
  var signup = document.getElementById('signup');
  var signin = document.getElementById('signin');
  search.style.display = 'none';
  signup.style.display = 'none';
  signin.style.display = '';
}

function switchDisplaySearch(){
  var search = document.getElementById('searcharea');
  var signup = document.getElementById('signup');
  var signin = document.getElementById('signin');
  search.style.display = '';
  signup.style.display = 'none';
  signin.style.display = 'none';
}
