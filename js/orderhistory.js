const userId = localStorage.getItem("userId");

function displayCart(products) {
  // products => list of products
  //console.log(products._embedded.cart);
  const prod = [];
  cart.push(cart._embedded.order_history);
  console.log(cart);
}

const ordercontainer = document.getElementById("order_history-container");
const order = [];

function loadStore() {
  fetch("http://localhost:8080/" + userId + "/orders/1", {
    method: "GET",
    headers: {
      Accept: "application/json",
      //"Content-Type":"application/json"
    },
    //body:JSON.stringify({"userName":username.value,"password":password.value})
  })
    .then((res) => res.json())
    .then((displayCart) => {
      order.push(...displayCart._embedded.order_history);
      onLoad();
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
  const img = document.createElement("img");
  img.className = "img-fluid";
  img.src = product.imgsrc;

  const firstDiv = document.createElement("div");
  firstDiv.className = "col-10 mx-auto col-md-2 my-3";
  firstDiv.append(img);

  const para = document.createElement("p");
  para.className = "text-uppercase";
  para.innerText = product.productname;

  const secondDiv = document.createElement("div");
  secondDiv.className = "col-10 mx-auto col-md-4";
  secondDiv.append(para);

  const para1 = document.createElement("p");
  para1.className = "text-uppercase";
  para1.innerText = "$" + product.productprice;

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
  // <div class="col-10 mx-auto col-md-2">
  //   <p class="text-uppercase">100.00$</p> */}
  // </div>

  //const span1=document.createElement("span");
  //span1.className="btn btn-black mx-1";
  // span1.innerText="-";

  //const span2=document.createElement("span");
  //span2.className="btn btn-black mx-1";
  //span2.innerText=1;

  //const span3=document.createElement("span");
  //span3.className="btn btn-black mx-1";
  //span3.innerText="+";

  //const fourthDiv=document.createElement("div");
  //fourthDiv.className="d-flex justify-content-center align-items-center";
  //fourthDiv.appendChild(span1);
  //fourthDiv.appendChild(span2);
  // fourthDiv.appendChild(span3);

  //const fifthDiv=document.createElement("div");
  //fifthDiv.className="col-10 mx-auto col-md-2";
  //firstDiv.append(fourthDiv);

  const para2 = document.createElement("p");
  para2.className = "text-uppercase";
  para2.innerText = "$" + product.productprice;

  const sixthDiv = document.createElement("div");
  sixthDiv.className = "col-10 mx-auto col-md-2";
  sixthDiv.append(para2);

  const sevenDiv = document.createElement("div");
  sevenDiv.className = "row my-3 align-items-center";
  sevenDiv.append(firstDiv);
  sevenDiv.append(secondDiv);
  sevenDiv.append(thirdDiv);
  //sevenDiv.append(fourthDiv);
  // sevenDiv.append(fifthDiv);
  sevenDiv.append(sixthDiv);

  ordercontainer.append(sevenDiv);
}

function onLoad() {
  order.forEach((product) => {
    createProduct(product);
  });
}

loadStore();
