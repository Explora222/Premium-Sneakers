document.addEventListener('DOMContentLoaded', () => {
  const cartCount = document.getElementById('cart-count');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  let cart = [];

  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const product = {
        name: e.target.dataset.name,
        price: parseFloat(e.target.dataset.price)
      };
      cart.push(product);
      cartCount.textContent = cart.length;
      alert(`${product.name} added to cart!`);
    });
  });

  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    contactForm.reset();
  });

  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    document.querySelector('.hero').style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
  });
});
