const userId = localStorage.getItem("userId");
onLoad();
function onLoad() {
  fetch("http://localhost:8080/" + userId, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((user) => {
      document.getElementById("Name").value = user.userName;
      document.getElementById("Email").value = user.userEmail;
      document.getElementById("Phone").value = user.userPhoneNumber;
      document.getElementById("Password").value = user.userPassword;
      document.getElementById("Address").value = user.userAddress;
    });
}

function logout() {
  localStorage.clear();
}

function editable() {
  document.getElementById("Name").disabled = false;
  document.getElementById("Email").disabled = false;
  document.getElementById("Phone").disabled = false;
  document.getElementById("Password").disabled = false;
  document.getElementById("Address").disabled = false;
  document.getElementById("submit").hidden = false;
  document.getElementById("edit").hidden = true;
}
function submit() {
  const user = {
    userId: userId,
    userName: document.getElementById("Name").value,
    userEmail: document.getElementById("Email").value,
    userPhoneNumber: document.getElementById("Phone").value,
    userPassword: document.getElementById("Password").value,
    userAddress: document.getElementById("Address").value,
  };

  fetch("http://localhost:8080/" + userId, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((user) => {
      document.getElementById("Name").value = user.userName;
      document.getElementById("Email").value = user.userEmail;
      document.getElementById("Phone").value = user.userPhoneNumber;
      document.getElementById("Password").value = user.userPassword;
      document.getElementById("Address").value = user.userAddress;
    });
  document.getElementById("submit").hidden = true;
  document.getElementById("edit").hidden = false;
}
