const cartcontainer = document.getElementById("cart-container");
const userProducts = [];
const userId = localStorage.getItem("userId");
/*{
    userId: 0,
    product: {
      productId: 1,
      productName: "iphone 1",
      productImgSrc: "img/img-products/product-1.png",
      productPrice: 10000,
    },
    productNos: 1,
    productTotalPrice: 10000,
  },
  {
    userId: 0,
    product: {
      productId: 1,
      productName: "iphone 2",
      productImgSrc: "img/img-products/product-2.png",
      productPrice: 20000,
    },
    productNos: 1,
    productTotalPrice: 20000,
  },
];*/

function loadStore() {
  fetch("http://localhost:8080/" + userId + "/cart", {
    method: "GET",
    headers: {
      Accept: "application/json",
      //"Content-Type":"application/json"
    },
    //body:JSON.stringify({"userName":username.value,"password":password.value})
  })
    .then((res) => res.json())
    .then((displayCart) => {
      userProducts.push(...displayCart);
      onLoad();
    });
}

function onLoad() {
  userProducts.forEach((products) => {
    //console.log(products);
    createProduct(products);
  });
}

function createProduct(products) {
  // <div class="col-10 mx-auto col-md-2 my-3">
  //   <img
  //     src="img/img-products/product-1.png"
  //     alt=""
  //     class="img-fluid"
  //   />
  // </div>

  const img = document.createElement("img");
  img.className = "img-fluid";
  img.src = products.product.productImgSrc;

  const firstDiv = document.createElement("div");
  firstDiv.className = "col-10 mx-auto col-md-2 my-3";
  firstDiv.appendChild(img);

  // <div class="col-10 mx-auto col-md-4">
  //   <p class="text-uppercase">comfortable chair</p>
  // </div>

  const para = document.createElement("p");
  para.className = "text-uppercase";
  para.innerText = products.product.productName;

  const secondDiv = document.createElement("div");
  secondDiv.className = "col-10 mx-auto col-md-4";
  secondDiv.append(para);

  // <div class="col-10 mx-auto col-md-2">
  //   <p class="text-uppercase">100.00$</p>
  // </div>

  const para1 = document.createElement("p");
  para1.className = "text-uppercase";
  para1.innerText = "$" + products.product.productPrice;

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
  span2.innerText = products.productNos;

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
  para2.innerText = "$" + products.product.productPrice;

  const sixthDiv = document.createElement("div");
  sixthDiv.className = "col-10 mx-auto col-md-2";
  sixthDiv.append(para2);

  cartcontainer.append(firstDiv);
  cartcontainer.append(secondDiv);
  cartcontainer.append(thirdDiv);
  cartcontainer.append(fifthDiv);
  cartcontainer.append(sixthDiv);
}

loadStore();

document.getElementById("checkout").onclick = function () {
  const productIds = [];
  userProducts.forEach((prod) => {
    productIds.push(prod.product.productId);
  });
  fetch("http://localhost:8080/" + userId + "/orders/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productIds }),
  });
  fetch("http://localhost:8080/" + userId + "/cart", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });
  console.log(productIds);
  //console.log(JSON.stringify({ userProducts }));
  //location.href = "orderhistory.html";
};
