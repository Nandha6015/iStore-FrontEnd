function displayCart(products) {
  // products => list of products
  //console.log(products._embedded.cart);
  const prod = [];
  prod.push(products._embedded.cart);
  console.log(prod);
}

const cartcontainer = document.getElementById("cart-container");
const cart = [];

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
    .then((displayCart) => {
      cart.push(displayCart._embedded.cart);
      onLoad();
    });
}
function onLoad() {
  cart.forEach((product) => {
    createProduct(product);
  });
}
// <div class="col-10 mx-auto col-md-2 my-3">
//   <img
//     src="img/img-products/product-1.png"
//     alt=""
//     class="img-fluid"
//   />
// </div>
// <div class="col-10 mx-auto col-md-4">
//   <p class="text-uppercase">comfortable chair</p>
// </div>
// <div class="col-10 mx-auto col-md-2">
//   <p class="text-uppercase">100.00$</p>
// </div>
// <div class="col-10 mx-auto col-md-2">
//   <div class="d-flex justify-content-center align-items-center">
//     <span class="btn btn-black mx-1">-</span>
//     <span class="btn btn-black mx-1">4</span>
//     <span class="btn btn-black mx-1">+</span>
//   </div>
// </div>
// <div class="col-10 mx-auto col-md-2">
//   <p class="text-uppercase">100.00$</p> */}
// </div>
function createProduct(product) {
  const img = document.createElement("img");
  img.className = "img-fluid";
  img.src = product.imgsrc;

  const firstDiv = document.createElement("div");
  firstDiv.className = "col-10 mx-auto col-md-2 my-3";
  firstDiv.append(img);
}

loadStore();
