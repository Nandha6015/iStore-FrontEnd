const form = document.getElementById("register-form");

form.onsubmit = (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  user = {
    userName: data.userName,
    userEmail: data.userEmail,
    userPassword: data.userPassword,
    userAddress: data.userAddress,
  };

  fetch("http://localhost:8080/newuser", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((userdata) => {
      localStorage.setItem("userId", userdata.userId);
      location.href = "index.html";
    });
};
