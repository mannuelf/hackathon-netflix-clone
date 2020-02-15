document.getElementById('submit').addEventListener('click', function(){
  const firstName = document.getElementById('firstName');
  const firstNameError = document.getElementById('firstNameError');
  let isFirstNameValid = false;
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isEmailValid = false;
  let telNumber = document.getElementById('telNumber');
  const telNumberError = document.getElementById('telNumberError');
  const telNumberRegex = /^(\d{7})(\d{3})?$/;
  let isTelNumberValid = false;
  // test firstname
  if(firstName.value === ""){
    firstName.classList.add('is-danger');
    firstNameError.style.display = "block";
  }
  else{
    firstName.classList.remove('is-danger');
    firstNameError.style.display = "none";
    isFirstNameValid = true;
  }

  // test email
  console.log(!emailRegex.test(email.value))
  if(!emailRegex.test(email.value)) {
    email.classList.add('is-danger');
    emailError.style.display = "block";
  }
  else {
    email.classList.remove('is-danger');
    emailError.style.display = "none";
    isEmailValid = true;
  }

  console.log(telNumberRegex.test(telNumber.value))
  // test tel number
  if(!telNumberRegex.test(telNumber.value)) {
    telNumber.classList.add('is-danger');
    telNumberError.style.display = "block";
  }
  else {
    telNumber.classList.remove('is-danger');
    telNumberError.style.display = "none";
    isTelNumberValid = true;
  }


  (isFirstNameValid && isEmailValid && isTelNumberValid) && alert('Submitted')

})
