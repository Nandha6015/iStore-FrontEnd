const userId = localStorage.getItem("userId");
const ordercontainer = document.getElementById("order_history-container");
const order = [];
console.log(userId);

loadStore();

function loadStore() {
  fetch("http://localhost:8080/" + userId + "/orders", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((displayCart) => {
      order.push(...displayCart);
      console.log(order);
      onLoad();
    });
}

function onLoad() {
  order.forEach((product) => {
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

function createProduct(product) {
  // <div class="col-10 mx-auto col-md-2 my-3">
  //   <img
  //     src="img/img-products/product-1.png"
  //     alt=""
  //     class="img-fluid"
  //   />
  // </div>

  const img = document.createElement("img");
  img.className = "img-fluid";
  img.src = product.productImgSrc;

  const firstDiv = document.createElement("div");
  firstDiv.className = "col-10 mx-auto col-md-2 my-3";
  firstDiv.appendChild(img);

  // <div class="col-10 mx-auto col-md-4">
  //   <p class="text-uppercase">comfortable chair</p>
  // </div>

  const para = document.createElement("p");
  para.className = "text-uppercase";
  para.innerText = product.productName;

  const secondDiv = document.createElement("div");
  secondDiv.className = "col-10 mx-auto col-md-4";
  secondDiv.append(para);

  // <div class="col-10 mx-auto col-md-2">
  //   <p class="text-uppercase">100.00$</p>
  // </div>

  const para1 = document.createElement("p");
  para1.className = "text-uppercase";
  para1.innerText = "₹" + product.productPrice;

  const thirdDiv = document.createElement("div");
  thirdDiv.className = "col-10 mx-auto col-md-2";
  thirdDiv.append(para1);

  // <div class="col-10 mx-auto col-md-2">
  //   <div class="d-flex justify-content-center align-items-center">
  //     <span class="btn btn-black mx-1">-</span>
  //     <span class="btn btn-black mx-1">4</span>
  //     <span class="btn btn-black mx-1">+</span>
  //   </div>
  // </div>

  const span1 = document.createElement("span");
  span1.className = "btn btn-black mx-1";
  span1.innerText = "-";

  const span2 = document.createElement("span");
  span2.className = "btn btn-black mx-1";
  span2.innerText = product.productNos;

  const span3 = document.createElement("span");
  span3.className = "btn btn-black mx-1";
  span3.innerText = "+";

  const fourthDiv = document.createElement("div");
  fourthDiv.className = "d-flex justify-content-center align-items-center";
  fourthDiv.appendChild(span1);
  fourthDiv.appendChild(span2);
  fourthDiv.appendChild(span3);

  const fifthDiv = document.createElement("div");
  fifthDiv.className = "col-10 mx-auto col-md-2";
  fifthDiv.appendChild(fourthDiv);

  // <div class="col-10 mx-auto col-md-2">
  //   <p class="text-uppercase">100.00$</p>
  // </div>

  const para2 = document.createElement("p");
  para2.className = "text-uppercase";
  para2.innerText = "₹" + product.productPrice * product.productNos;

  const sixthDiv = document.createElement("div");
  sixthDiv.className = "col-10 mx-auto col-md-2";
  sixthDiv.append(para2);

  const line = document.createElement("hr");
  line.setAttribute("width", "90%");

  ordercontainer.append(firstDiv);
  ordercontainer.append(secondDiv);
  ordercontainer.append(thirdDiv);
  ordercontainer.append(fifthDiv);
  ordercontainer.append(sixthDiv);
  ordercontainer.append(line);
}
