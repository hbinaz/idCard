function idCard() {
 var firstName = document.getElementById('firstName').value;
 var lastName = document.getElementById('lastName').value;
 var address = document.getElementById('address').value;
 var fullName = firstName + lastName;
document.getElementById("postFullName").innerHTML = fullName;
document.getElementById("postAddress").innerHTML = address;
var age = document.getElementById('age').value;
var phoneNumber = document.getElementById('phoneNumber').value;



// document.getElementById("postAge").innerHTML = age;
// document.getElementById("postPhoneNumber").innerHTML = phoneNumber;


}
