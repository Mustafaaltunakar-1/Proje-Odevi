const products = {
  apples: {
    quantity: 1,
    price: 1,
  },
  bananas: {
    quantity: 1,
    price: 1,
  },
  bread: {
    quantity: 1,
    price: 1,
  },
  eggs: {
    quantity: 1,
    price: 1,
  },
};

let totalPrice = 0;

const totalPriceElement = document.getElementById('total');

document.addEventListener('DOMContentLoaded', function () {
  for (const product in products) {
    totalPrice += products[product].quantity * products[product].price;
    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = products[product].quantity;

    const addCartButton = document.getElementById(`${product}_add`);
    addCartButton.addEventListener('click', () => addToCart(product));

    const removeCartButton = document.getElementById(`${product}_remove`);
    removeCartButton.addEventListener('click', () => removeFromCart(product));

    // Select increment / decrement buttons for every product and add event listeners to them
  }

  totalPriceElement.textContent = totalPrice;
});

function addToCart(product) {
  products[product].quantity++;
  const newQuantity = products[product].quantity;

  totalPrice += products[product].price;
  totalPriceElement.textContent = totalPrice;

  const productQuantitySpan = document.getElementById(`${product}_quantity`);
  productQuantitySpan.textContent = newQuantity;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.remove('hidden');
}

function removeFromCart(product) {
  const oldQuantity = products[product].quantity;

  products[product].quantity = 0;

  totalPrice -= products[product].price * oldQuantity;
  totalPriceElement.textContent = totalPrice;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.add('hidden');
}

const incrementBtn = document.getElementById(`${product}_increment`);
    if (incrementBtn) {
      incrementBtn.addEventListener('click', () => {
        products[product].quantity++;
        updateProductUI(product);
      });
    }

    const decrementBtn = document.getElementById(`${product}_decrement`);
    if (decrementBtn) {
      decrementBtn.addEventListener('click', () => {
        if (products[product].quantity > 0) {
          products[product].quantity--;
          updateProductUI(product);
        }
      });
    }
  
    const clearCartButton = document.getElementById('cart_clear');
  if (clearCartButton) {
    clearCartButton.addEventListener('click', () => {
      for (const product in products) {
        products[product].quantity = 0;
        updateProductUI(product);
      }
      console.log("Sepet temizlendi.");
    });
  }

  function updateProductUI(product) {
  const qty = products[product].quantity;
  const qtySpan = document.getElementById(`${product}_quantity`);
  if (qtySpan) {
    qtySpan.textContent = qty;
  }
  const cartItem = document.getElementById(`${product}_cart`);
  if (cartItem) {
    if (qty > 0) {
      cartItem.classList.remove('hidden');
    } else {
      cartItem.classList.add('hidden');
    }
  }
  calculateTotalPrice();
}

function calculateTotalPrice() {
  totalPrice = 0;
  for (const product in products) {
    totalPrice += products[product].quantity * products[product].price;
  }
  totalPriceElement.textContent = totalPrice;
}