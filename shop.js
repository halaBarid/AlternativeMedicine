const productButtons = document.querySelectorAll('.product-types-button');
const products = document.querySelectorAll('.product');

// Initially, hide all products except the first one
for (let i = 1; i < products.length; i++) {
  products[i].style.display = 'none';
}

// Add click event listeners to buttons to toggle product display
productButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Hide all products
    products.forEach((product) => {
      product.style.display = 'none';
    });

    // Show the selected product
    products[index].style.display = 'block';
  });
});
