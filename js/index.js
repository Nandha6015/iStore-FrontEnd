document.getElementById("login-profile").onclick = function () {
  if (localStorage.getItem("userId") == null) {
    location.href = "login.html";
  } else {
    location.href = "profile.html";
  }
};
