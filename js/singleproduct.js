// const products = {
//   1: {
//     id: 1,
//     name: "mac lap",
//     price: 50000,
//     oldPrice: 60000,
//     desc: "description",
//     images: [
//       "img/img-products/product-12.png",
//       "img/img-products/product-13.png",
//       "img/img-products/product-14.png",
//       "img/img-products/product-15.png",
//       "img/img-products/product-1.png",
//     ],
//   },
// };

let id;
const userId = localStorage.getItem("userId");
let isAdded = false;
isInCart();
loadproduct();

function getProduct() {
  const url = new URL(window.location.toString());
  id = url.searchParams.get("productId");
  return id;
}

function loadproduct() {
  fetch("http://localhost:8080/products/" + getProduct(), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((singleprod) => {
      const product = singleprod;
      displayProduct(product);
    });
}

function isInCart() {
  fetch("http://localhost:8080/" + userId + "/cart/" + getProduct(), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      //console.log(data, 1);
      isAdded = data;
    });
}

const productDetails = document.getElementById("productDetails");
const mainImage = document.getElementById("mainImage");
const otherImages = document.getElementById("otherImages");

function displayProduct(product) {
  const title = document.createElement("h2");
  title.className = "text-uppercase my-2";
  title.innerText = product.productName;

  const priceContainer = document.createElement("h3");
  const newPrice = document.createElement("span");
  newPrice.className = "mr-2";
  newPrice.innerText = "₹" + product.productPrice;

  const oldPrice = document.createElement("span");
  oldPrice.className = "text-muted old-price";
  oldPrice.innerText = "₹" + (product.productPrice + 1000);

  priceContainer.appendChild(newPrice);
  priceContainer.appendChild(oldPrice);

  const description = document.createElement("p");
  description.innerText = product.productDesc;

  const addToCart = document.createElement("button");
  if (isAdded == false) {
    addToCart.innerText = "Add to Cart";
    addToCart.className = "btn btn-yellow my-2";
  } else {
    addToCart.innerText = "Remove from Cart";
    addToCart.className = "btn btn-dark my-2";
  }
  addToCart.onclick = () => addToCartClick(product, addToCart);

  productDetails.appendChild(title);
  productDetails.appendChild(priceContainer);
  productDetails.appendChild(description);
  productDetails.appendChild(addToCart);

  const img = [];

  for (var i in product.images) img.push(product.images[i]);

  mainImage.innerHTML = '<img src="' + img[1] + '" class="img-fluid mh-100" />';

  for (let i = 1; i < img.length; i++) {
    const imageContainer = document.createElement("div");
    imageContainer.className = "col-2 col-sm-2 p-1 single-product-photo";
    imageContainer.style.height = "200px";
    imageContainer.onclick = () => {
      mainImage.innerHTML =
        '<img src="' + img[i] + '" class="img-fluid mh-100" />';
    };
    const image = document.createElement("img");
    image.src = img[i];
    image.className = "img-fluid mw-100 mh-100";
    imageContainer.appendChild(image);
    otherImages.appendChild(imageContainer);
  }
}

function addToCartClick(product, btn) {
  //const isAdded = btn.innerText.includes("Add");

  if (isAdded == false) {
    // TODO: use fetch method to add to cart in backend
    addtocart(product);
    btn.className = "btn btn-dark my-2";
    btn.innerText = "Remove from Cart";
  } else {
    // TODO: use fetch method to remove from cart in backend
    removefromcart();
    btn.className = "btn btn-yellow my-2";
    btn.innerText = "Add to Cart";
  }
  // }
}

function addtocart(product) {
  fetch("http://localhost:8080/" + userId + "/cart/" + getProduct(), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  //console.log(JSON.stringify({ product }));
}

function removefromcart() {
  fetch("http://localhost:8080/" + userId + "/cart/" + getProduct(), {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });
}
