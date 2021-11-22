//const searchBox = document.getElementById('searchBox')
//const username = document.getElementById('usename')

function displayCart(products) {
  // products => list of products
  console.log(products);
}

function loadStore() {
  fetch("http://localhost:8080/cart", {
    method: "GET",
    headers: {
      Accept: "application/json",
      //"Content-Type":"application/json"
    },
    //body:JSON.stringify({"userName":username.value,"password":password.value})
  })
    .then((res) => res.json())
    .then(displayCart);
}

loadStore();
/* <input id="username">

username : abcd


console.log(searchBox.value) */
