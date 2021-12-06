const productContainer = document.getElementById("productContainer");
const prod = [];

function loadproduct() {
  fetch("http://localhost:8080/products", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((displayProduct) => {
      prod.push(...displayProduct);
      console.log(prod);
      onLoad();
    });
}
// <div class="col-12 container p-5 row">
//     <img src="img/img-products/product-12.png" alt="" class="col-5">
//     <div class="py-4 col-7">
//         <div>
//             <h2 class="text-capitalize">MacBook Air</h2>
//             <h6>
//                 <span class="text-muted old-price mx-2">$200</span>
//                 <span>$100</span>
//             </h6>
//         </div>
//         <a href="#" class="text-capitalize btn btn-primary">add to cart</a>
//     </div>
// </div>

function createProduct(product) {
  const h2 = document.createElement("a");
  h2.href = "singleproduct.html?productId=" + product.productId;
  h2.className = "h5 text-capitalize";
  h2.innerText = product.productName;

  const oldPrice = document.createElement("span");
  oldPrice.className = "text-muted old-price mx-2";
  oldPrice.innerText = "$" + (product.productPrice + 1000);

  const price = document.createElement("span");
  price.innerText = "$" + product.productPrice;

  const h6 = document.createElement("h6");
  h6.appendChild(oldPrice);
  h6.appendChild(price);

  const details = document.createElement("div");
  details.append(h2);
  details.append(h6);

  const content = document.createElement("div");
  content.className = "col-7";
  content.appendChild(details);

  const image = document.createElement("img");
  image.className = "img-responsive";
  image.src = product.productImgSrc;

  const productDiv = document.createElement("div");
  productDiv.className = "col-5 shadow container row p-5 m-4";
  productDiv.appendChild(image);
  productDiv.appendChild(content);
  productContainer.appendChild(productDiv);
}

function onLoad() {
  prod.forEach((product) => {
    createProduct(product);
  });
}
loadproduct();
