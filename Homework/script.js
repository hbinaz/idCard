function idCard() {
 var firstName = document.getElementById('firstName').value;
 var lastName = document.getElementById('lastName').value;
 var address = document.getElementById('address').value;
 var fullName = firstName + lastName;
var age = document.getElementById('age').value;
var PhoneNumber = document.getElementById('phoneNumber').value;

document.getElementById("postFullName").innerHTML = fullName;
// document.getElementById("postAge").innerHTML = age;
// document.getElementById("postPhoneNumber").innerHTML = fullName;
// document.getElementById("postAddress").innerHTML = fullName;

}

// var Age = document.getElementById('age').value;
// var PhoneNumber = document.getElementById('phoneNumber').value;

