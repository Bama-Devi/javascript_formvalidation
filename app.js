let form=document.getElementById("form");
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let fathersName = document.getElementById('fathersName');
let mail = document.getElementById('mail');
let mobileNumber = document.getElementById('mobileNumber');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

let gender=document.getElementById('gender');
let role= document.getElementById('role');
let bloodGroup = document.getElementById('bloodGroup');
let dob = document.getElementById('dob');
let file = document.getElementById('file');
 

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  validateInputs();
})
function validateInputs(){
  let firstNameVal=firstName.value.trim();
  let lastNameVal=lastName.value.trim();
  let fathersNameVal=fathersName.value.trim();
  let mailVal=mail.value.trim();
  let mobileNumberVal=mobileNumber.value.trim();
  let passwordVal=password.value.trim();
  let confirmPasswordVal=confirmPassword.value.trim();

  let dobVal = dob.value;
  // let genderVal=gender.value;
  // let roleVal=role.value;
  let bloodGroupVal=bloodGroup.value;
  let fileVal = file.value;




  //first name
if(firstNameVal===""){
  setError(firstName,"user name is required");
}

else if (/\d/.test(firstNameVal)) {
  setError(firstName, "Please enter a valid name without numbers");
}
else{
  setSuccess(firstName);  
}


//last name
if(lastNameVal===""){
  setError(lastName,"please enter your last name");
}
else if (/\d/.test(lastNameVal)) {
  setError(lastName, "Please enter a valid name without numbers");
} 
else{
  setSuccess(lastName); 
}


//fathers name
if(fathersNameVal===""){
  setError(fathersName,"fathers name is required");
}
else if (/\d/.test(fathersNameVal)) {
  setError(fathersName, "Please enter a valid name without numbers");
}
else{
  setSuccess(fathersName);  
}
   


// radio input 





//checkbox input






//select tag
if (bloodGroupVal === 'Type') {
  setError(bloodGroup, "Please select a blood group");
}
 else {
  setSuccess(bloodGroup);
}

//  date input
if (dobVal === "") {
  setError(dob, "Please enter your date of birth");
}
//  else if (!isValidDate(dobVal)) {
//   setError(dob, "Please enter a valid date of birth (dd-mm-yyyy)");
// }
 else {
  setSuccess(dob);
}



//mail
if(mailVal===""){
  setError(mail,"mail is required");
}
else if(!validateEmail(mailVal)){
  setError(mail,"please enter a valid mail");
}
else{
  setSuccess(mail);
}

//mobile number
if (!isValidMobileNumber(mobileNumberVal)) {
  setError(mobileNumber, 'Invalid mobile number');
} else {
  setSuccess(mobileNumber);
}

//password
if(passwordVal===""){
  setError(password,"Password is required");
}
else if(passwordVal.length<8){
  setError(password,"Password must be atleast 8 characters");
}
else{
  setSuccess(password); 
}

//confirm password
if(confirmPasswordVal===""){
  setError(confirmPassword,"Password is required");
}
else if(confirmPasswordVal!==passwordVal){
  setError(confirmPassword,"Password does not match");
}
else{
  setSuccess(confirmPassword); 
}


//file
if (!fileVal) {
  setError(file, "Please upload a file");
} 
else {
  setSuccess(file);
} 


}




function setError(element,message){
  let inputGroup=element.parentElement;
  let errorElement=inputGroup.querySelector("small");
  inputGroup.className="text-box error";
  errorElement.innerText=message;
}

function setSuccess(element){
  let inputGroup=element.parentElement;
  inputGroup.className="text-box success"; 
}

//mail validation code

function validateEmail(mail) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

//mobile validation code 

function isValidMobileNumber(number) {
  const mobileNumberRegex = /^[0-9]{10}$/;
  return mobileNumberRegex.test(number);
}


 //radio validation


 
 //checkbox validate



//date validation code

function isValidDate(dateString) {
  const pattern = /^\d{2}-\d{2}-\d{4}$/;
  if (!pattern.test(dateString)) return false;

  const parts = dateString.split("-");
  const year = parseInt(parts[2], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[0], 10);
  const currentYear = new Date().getFullYear();
  if (year < 2000 || year >currentYear - 10) return false; // Adjust the range as needed
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;

  return true;

}

// function mailVal(mail){
//   return /^(([^<>()\[\]\\.,;:\@s"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)\(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
  
// }







// function setError(element,message){
//   let inputGroup=element.parentElement;
//   let errorElement=inputGroup.querySelector(".error");
//   errorElement.innerText=message;
//   inputGroup.classList.add("error");
//   inputGroup.classList.remove("success");

// }
// function setSuccess(element){
//   let inputGroup=element.parentElement;
//   let errorElement=inputGroup.querySelector(".error");
//   errorElement.innerText="";
//   inputGroup.classList.add("success");
//   inputGroup.classList.remove("error");

// }
// return /^(([^<>()\[\]\\.,;:\@s"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)\(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.


  