const userId = localStorage.getItem("userId");
const ordercontainer = document.getElementById("order-container");
// document.getElementById("order_history-container");
const orders = [];

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
      orders.push(...displayCart);
      onLoad();
    });
}

{
  /* <div class="col-10 mx-auto col-md-2">orderdate</div>
    <hr width="90%" />
    <div
      class="row my-3 align-items-center"
      id="order_history-container">
    </div> 
*/
}

async function onLoad() {
  orders.forEach((order) => {
    fetch("http://localhost:8080/" + userId + "/orders/" + order.orderId, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((displayCart) => {
        createup(order);
        displayCart.forEach((product) => {
          createProduct(product);
          console.log(order.orderId, "in");
        });
      });
  });
}

function createup(order) {
  // const hrline = document.createElement("hr");
  // hrline.setAttribute("width", "100%");

  const div = document.createElement("div");
  div.innerText = order.orderDate;
  div.className = "col-10 mx-auto col-md-2";

  const hor = document.createElement("hr");
  hor.setAttribute("width", "90%");
  div.appendChild(hor);

  // ordercontainer.append(hrline);
  ordercontainer.append(div);
  fet(order);
  console.log(order.orderId, "out");
  //await sleep(1000);
}
function fet(order) {}

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

  // const span1 = document.createElement("span");
  // span1.className = "btn btn-black mx-1";
  // span1.innerText = "-";

  const span2 = document.createElement("span");
  span2.className = "btn btn-black mx-1";
  span2.innerText = product.productNos;

  // const span3 = document.createElement("span");
  // span3.className = "btn btn-black mx-1";
  // span3.innerText = "+";

  const fourthDiv = document.createElement("div");
  fourthDiv.className = "d-flex justify-content-center align-items-center";
  // fourthDiv.appendChild(span1);
  fourthDiv.appendChild(span2);
  // fourthDiv.appendChild(span3);

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

  const div = document.createElement("div");
  div.className = "row my-3 align-items-center";

  div.append(firstDiv);
  div.append(secondDiv);
  div.append(thirdDiv);
  div.append(fifthDiv);
  div.append(sixthDiv);
  div.append(line);

  ordercontainer.append(div);
}
