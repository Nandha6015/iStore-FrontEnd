const products = {
  1: {
    id: 1,
    name: "mac lap",
    price: 50000,
    oldPrice: 60000,
    desc: "description",
    images: [
      "img/img-products/product-12.png",
      "img/img-products/product-13.png",
      "img/img-products/product-14.png",
      "img/img-products/product-15.png",
      "img/img-products/product-1.png",
    ],
  },
};

const productDetails = document.getElementById("productDetails");
const mainImage = document.getElementById("mainImage");
const otherImages = document.getElementById("otherImages");

function getProduct() {
  const url = new URL(window.location.toString());
  const id = url.searchParams.get("id");
  return products[id];
}

function addToCartClick(product, btn) {
  const isAdded = btn.innerText.includes("Add");

  if (isAdded) {
    // TODO: use fetch method to add to cart in backend
    btn.className = "btn btn-dark my-2";
    btn.innerText = "Remove from Cart";
  } else {
    // TODO: use fetch method to remove from cart in backend
    btn.className = "btn btn-yellow my-2";
    btn.innerText = "Add to Cart";
  }
}

function displayProduct() {
  const product = getProduct();

  const title = document.createElement("h2");
  title.className = "text-uppercase my-2";
  title.innerText = product.name;

  const priceContainer = document.createElement("h3");
  const newPrice = document.createElement("span");
  newPrice.className = "mr-2";
  newPrice.innerText = "$" + product.price;

  const oldPrice = document.createElement("span");
  oldPrice.className = "text-muted old-price";
  oldPrice.innerText = "$" + product.oldPrice;

  priceContainer.appendChild(newPrice);
  priceContainer.appendChild(oldPrice);

  const description = document.createElement("p");
  description.innerText = product.desc;

  const addToCart = document.createElement("button");
  addToCart.innerText = "Add to Cart";
  addToCart.className = "btn btn-yellow my-2";
  addToCart.onclick = () => addToCartClick(product, addToCart);

  productDetails.appendChild(title);
  productDetails.appendChild(priceContainer);
  productDetails.appendChild(description);
  productDetails.appendChild(addToCart);

  mainImage.innerHTML =
    '<img src="' + product.images[0] + '" class="img-fluid" />';

  product.images.forEach((imageUrl) => {
    const imageContainer = document.createElement("div");
    imageContainer.className = "col-2 col-sm-2 p-1 single-product-photo";
    imageContainer.onclick = () => {
      mainImage.innerHTML = '<img src="' + imageUrl + '" class="img-fluid" />';
    };

    const image = document.createElement("img");
    image.src = imageUrl;
    image.className = "img-fluid";

    imageContainer.appendChild(image);
    otherImages.appendChild(imageContainer);
  });
}

displayProduct();