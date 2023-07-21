document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generateBtn").addEventListener("click", function () {
      var passwordLength = 12; // Set the desired password length
  
      var useUppercase = true; // Include uppercase letters
      var useLowercase = true; // Include lowercase letters
      var useNumbers = true; // Include numbers
      var useSymbols = true; // Include symbols
  
      var password = generatePassword(passwordLength, useUppercase, useLowercase, useNumbers, useSymbols);
      document.getElementById("passwordResult").textContent = "Generated Password: " + password;
    });
  
    function generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {
      var charset = "";
  
      if (useUppercase) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
  
      if (useLowercase) {
        charset += "abcdefghijklmnopqrstuvwxyz";
      }
  
      if (useNumbers) {
        charset += "0123456789";
      }
  
      if (useSymbols) {
        charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
      }
  
      var password = "";
  
      for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
      }
  
      return password;
    }
  });
  