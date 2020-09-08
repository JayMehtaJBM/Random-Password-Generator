var alertBox = $(".alertBox")

function getPassword() {

  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()-_=+/*.<>/?:{}[] ";

  var passwordLength = 16;
  var password = "";

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);

    password += chars.substring(randomNumber, randomNumber + 1);
  }
  $("#password").val(password);
  alertBox.html("New Password Copied : <br> " + password);
}

function copyPassword() {
  var copyPassText = document.getElementById("password");
  copyPassText.select();
  copyPassText.setSelectionRange(0, 9999);
  document.execCommand("copy");
  alertBox.toggleClass("active");

  setTimeout (function () {
    alertBox.toggleClass("active");
  } , 2000 );
}
