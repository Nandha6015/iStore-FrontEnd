const products = [
  {
    id: 1,
    name: "mac lap",
    price: 50000,
    oldPrice: 60000,
    image: "img/img-products/product-12.png",
    desc: "description",
  },
  {
    id: 2,
    name: "Iphone",
    price: 400,
    oldPrice: 800,
    image: "img/img-products/product-11.png",
  },
  {
    id: 3,
    name: "Iphone",
    price: 400,
    oldPrice: 800,
    image: "img/img-products/product-11.png",
  },
];

const productContainer = document.getElementById("productContainer");

// <div class="col-12 container p-5 row">
//     <img src="img/img-products/product-12.png" alt="" class="col-5">
//     <div class="py-4 col-7">
//         <div>
//             <h2 class="text-capitalize">MacBook Air</h2>
//             <h6>
//                 <span class="text-muted old-price mx-2">$200</span>
//                 <span>$100</span>
//             </h6>
//             <ul>
//             <li>Hello</li>
//             <li>World</li>
//             </ul>
//         </div>
//         <a href="#" class="text-capitalize btn btn-primary">add to cart</a>
//     </div>
// </div>
function loadproduct() {
  fetch("http://localhost:8080/cart", {
    method: "GET",
    headers: {
      Accept: "application/json",
      //"Content-Type":"application/json"
    },
    //body:JSON.stringify({"userName":username.value,"password":password.value})
  })
    .then((res) => res.json())
    .then(displayproduct);
}

function createProduct(product) {
  const h2 = document.createElement("a");
  h2.href = "singleproduct.html?id=" + product.id;
  h2.className = "h2 text-capitalize";
  h2.innerText = product.name;

  const oldPrice = document.createElement("span");
  oldPrice.className = "text-muted old-price mx-2";
  oldPrice.innerText = "$" + product.oldPrice;

  const price = document.createElement("span");
  price.innerText = "$" + product.price;

  const h6 = document.createElement("h6");
  h6.appendChild(oldPrice);
  h6.appendChild(price);

  const details = document.createElement("div");
  details.append(h2);
  details.append(h6);

  const addToCart = document.createElement("a");
  addToCart.href = "#";
  addToCart.className = "text-capitalize btn btn-primary";
  addToCart.innerText = "Add to Cart";

  const content = document.createElement("div");
  content.className = "col-7";
  content.appendChild(details);
  content.appendChild(addToCart);

  const image = document.createElement("img");
  image.className = "col-5";
  image.src = product.image;

  const productDiv = document.createElement("div");
  productDiv.className = "col-5 shadow container row p-5 m-4";
  productDiv.appendChild(image);
  productDiv.appendChild(content);

  productContainer.appendChild(productDiv);
}

function onLoad() {
  products.forEach((product) => {
    createProduct(product);
  });
}
//loadproduct();
onLoad();
