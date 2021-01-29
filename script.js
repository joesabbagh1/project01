function myFunction() {
	var x = document.getElementById("mynavigation");
	if (x.className === "navigation") {
	  x.className += " responsive";
	} else {
	  x.className = "navigation";
	}
}

$(document).ready(function(){
  $('.list').click(function(){
    const value = $(this).attr('data-filter');
    if (value =='all'){
      $('.card').show('1000');
    }
      else{
        $('.card').not('.' +value).hide('1000');
        $('.card').filter('.' +value).show('1000');
      }
    })
    $('.list').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    })
  })

const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const phonenumberValue = phonenumber.value.trim();

	
	if(firstnameValue === '') {
		setErrorFor(firstname, 'first name cannot be blank');
	} else {
		setSuccessFor(firstname);
  }

  if( lastnameValue === '') {
		setErrorFor(lastname, 'first name cannot be blank');
	} else {
		setSuccessFor(lastname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(phonenumberValue === '') {
		setErrorFor(phonenumber, 'Password cannot be blank');
	} else {
		setSuccessFor(phonenumber);
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}