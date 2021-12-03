document.getElementById("login-profile").onclick = function () {
  if (localStorage.getItem("userId") == null) {
    console.log("no");
    window.location.replace("login.html");
  } else {
    console.log("yes");
    window.location.replace("profile.html");
  }
};
