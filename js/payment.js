document.getElementById("orders").onclick = () => {
  fetch("http://localhost:8080/" + localStorage.getItem("userId") + "/orders", {
    method: "POST",
  }).then(() => {
    fetch("http://localhost:8080/" + localStorage.getItem("userId") + "/cart", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    });
    location.href = "orderhistory.html";
  });
};
