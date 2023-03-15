function addPassword() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username !== "" && password !== "") {
    var passwordList = document.getElementById("password-list");
    var passwordItem = document.createElement("li");
    passwordItem.textContent = username + ": " + password;
    passwordList.appendChild(passwordItem);
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  } else {
    alert("Please enter a username and password");
  }
}
