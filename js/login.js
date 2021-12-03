const form = document.getElementById("login-form");

form.onsubmit = (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  fetch("http://localhost:8080/user", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userEmail: data.userEmail,
      userPassword: data.userPassword,
    }),
  })
    .then((res) => res.json())
    .then((userdata) => {
      const userId = userdata.userId;
      if (userId > 0) {
        localStorage.setItem("userId", userId);
        location.href = "index.html";
      } else {
        alert("Enter Valid Credientals");
      }
    });
};
