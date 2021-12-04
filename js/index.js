document.getElementById("login-profile").onclick = function () {
  if (localStorage.getItem("userId") == null) {
    window.location.replace("login.html");
  } else {
    window.location.replace("profile.html");
  }
};
