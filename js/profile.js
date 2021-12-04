function logout() {
  localStorage.clear();
}
onLoad();
let user;
function onLoad() {
  fetch("http://localhost:8080/" + localStorage.getItem("userId"), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((user) => {
      const Name = document.getElementById("Name");
      Name.innerText = user.userName;

      const Email = document.getElementById("Email");
      Email.innerText = user.userEmail;

      const Phone = document.getElementById("Phone");
      Phone.innerText = user.userPhoneNumber;

      const Password = document.getElementById("Password");
      Password.innerText = user.userPassword;

      const Address = document.getElementById("Address");
      Address.innerText = user.userAddress;
    });
}
