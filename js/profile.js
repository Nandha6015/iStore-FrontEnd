function logout() {
  localStorage.clear();
}

//const user = {};

function onLoad() {
  fetch("http://localhost:8080/" + localStorage.getItem("userId"), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json)
    .then((data) => {
      console.log(data);
    });
}
