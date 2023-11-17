document.getElementById("generate").addEventListener("click", function () {
  var password = generatePassword();
  document.getElementById("password").value = password;
});

function generatePassword() {
  var length = 8; 

  var includeLowercase = true;
  var includeUppercase = true;
  var includeNumeric = true;
  var includeSpecial = true;

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=";

  var allChars = "";
  if (includeLowercase) {
    allChars += lowercaseChars;
  }
  if (includeUppercase) {
    allChars += uppercaseChars;
  }
  if (includeNumeric) {
    allChars += numericChars;
  }
  if (includeSpecial) {
    allChars += specialChars;
  }

  if (allChars === "") {
    alert("Please select at least one character type.");
    return "";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}
