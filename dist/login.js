const pass = "abc123";
function submission() {
  document.getElementById("password").value === pass
    ? alert("You have successfully logged in")
    : alert("WRONG PASSWORD ENTERED");
}
