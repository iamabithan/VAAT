const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
$(document).ready(function() {
  $("#search-icon").click(function() {
      $("#search-bar").toggle();
  });

  // Click event handler for the "buy now" links inside the preview section
  $(".buy-now-btn").click(function(event) {
      event.preventDefault();
      var product = $(this).data("product");
      // Redirect to the appropriate buynow.html page based on the clicked product (similar to the previous code)
      // ...
  });

  // Click event handler for the "Offer Exchange" buttons
  $(".exchange-btn").click(function(event) {
      event.preventDefault();
      // Redirect to the exchange.html page
      window.location.href = "exchange.html";
  });
});
// scripts.js

// Add an event listener to detect when the mouse moves over the button
document.addEventListener('mousemove', function(event) {
  // Get the coordinates of the cursor
  const mouseX = event.pageX;
  const mouseY = event.pageY;

  // Get the position and dimensions of the button
  const button = document.querySelector('.exchange-btn');
  const buttonRect = button.getBoundingClientRect();
  const buttonLeft = buttonRect.left;
  const buttonRight = buttonRect.right;
  const buttonTop = buttonRect.top;
  const buttonBottom = buttonRect.bottom;

  // Check if the cursor is within a certain range of the button
  // Here, we define a range of 50 pixels from each side of the button
  if (
    mouseX >= buttonLeft - 50 &&
    mouseX <= buttonRight + 50 &&
    mouseY >= buttonTop - 50 &&
    mouseY <= buttonBottom + 50
  ) {
    // Apply the transition effect by adding a class to the button
    button.classList.add('smooth-transition');
  } else {
    // Remove the class when the cursor is not near the button
    button.classList.remove('smooth-transition');
  }
});


