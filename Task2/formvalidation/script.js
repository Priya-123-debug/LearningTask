const form = document.querySelector("#registerForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmError = document.querySelector("#confirmError");

const successMessage = document.querySelector("#successMessage");
form.addEventListener("submit",function(e){
	nameError.textContent = "";
emailError.textContent = "";
passwordError.textContent = "";
confirmError.textContent = "";
successMessage.textContent = "";

	e.preventDefault();
	let namevalue=nameInput.value.trim() ;
	if(namevalue.length<=3){
	  nameError.textContent = "Name must be more than 3 characters";
		value=false;
	};
	let valid=true;
//  learn about regex
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
	let emailvalue=emailInput.value;
	if (!emailRegex.test(emailvalue)) {
    emailError.textContent = "Invalid email";
		valid=false;
}
let password=passwordInput.value;
const hasUpper = /[A-Z]/.test(password);
const hasLower = /[a-z]/.test(password);
const hasDigit = /\d/.test(password);
const hasLength = password.length >= 8;
if(!hasUpper||!hasLower||!hasDigit||!hasLength){
	passwordError.textContent="add appropriate password";
	valid=false;
}
let confirmpassword=confirmPasswordInput.value;
if (confirmpassword !== password) {
    confirmError.textContent = "Passwords do not match";
		valid=false;
}
nameError.textContent = "";
emailError.textContent = "";
passwordError.textContent = "";
confirmError.textContent = "";
successMessage.textContent = "";
if (valid) {
    successMessage.textContent = "Registration Successful";

 nameInput.value = "";
 emailInput.value = "";
 passwordInput.value = "";
 confirmPasswordInput.value = "";
 	successMessage.textContent="";
}


})