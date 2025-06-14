// Modal Functionality
const cartModal = document.getElementById("cartModal");
const closeBtn = document.querySelector(".close-btn");
const cartItemsList = document.getElementById("cart-items");
const emptyCartMsg = document.getElementById("empty-cart-msg");

// Search Functionality
const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-bar");

// Toggle search bar visibility
searchIcon.addEventListener("click", () => {
  if (searchBar.style.display === "none" || searchBar.style.display === "") {
    searchBar.style.display = "block";
    searchBar.focus();
  } else {
    searchBar.style.display = "none";
  }
});

// Function to update the cart modal content
function addToCart(itemName) {
  emptyCartMsg.style.display = "none";

  const listItem = document.createElement("li");
  listItem.textContent = itemName;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", () => {
    listItem.remove();
    checkIfCartIsEmpty();
  });

  listItem.appendChild(removeBtn);
  cartItemsList.appendChild(listItem);
}

// Function to check if the cart is empty
function checkIfCartIsEmpty() {
  if (cartItemsList.children.length === 0) {
    emptyCartMsg.style.display = "block";
  }
}

// Open cart modal when clicking the cart icon
document.getElementById("cart-btn").addEventListener("click", () => {
  if (cartItemsList.children.length === 0) {
    emptyCartMsg.style.display = "block";
  }
  cartModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

// Close the cart modal
closeBtn.addEventListener("click", () => {
  cartModal.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside modal content
window.addEventListener("click", (event) => {
  if (event.target === cartModal) {
    cartModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Submit Request Form
document.getElementById("submit-request").addEventListener("click", (event) => {
  event.preventDefault();
  alert("Dish request submitted!");
  requestModal.style.display = "none";
});

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you for reaching out! We will contact you within 48 hours.");
    document.getElementById("contact-form").reset();
  } else {
    alert("Please fill out all fields.");
  }
});

// Carousel Functionality
const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function updateCarousel() {
  const visibleCards = 3;
  const itemWidth = items[0].getBoundingClientRect().width + 40;
  const offsetIndex = index > 0 ? index : 0;

  // Move the carousel track
  track.style.transform = `translateX(-${offsetIndex * itemWidth}px)`;

  // Disable buttons at boundaries
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index >= items.length - visibleCards;
}

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (index < items.length - 3) {
    index++;
    updateCarousel();
  }
});

updateCarousel();

// Function to add item to cart
function addToCart(itemName) {
  emptyCartMsg.style.display = "none";

  // Check if item already exists in the cart
  let existingItem = [...cartItemsList.children].find((item) =>
    item.textContent.includes(itemName)
  );
  if (existingItem) {
    alert("Item already in cart!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = itemName;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", () => {
    listItem.remove();
    checkIfCartIsEmpty();
  });

  listItem.appendChild(removeBtn);
  cartItemsList.appendChild(listItem);
}

// Attach event listeners to all add-to-cart buttons in kitchen and popular items
const addToCartButtons = document.querySelectorAll(".add-to-cart img");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const itemName = e.target
      .closest(".food-card")
      .querySelector(".food-name").textContent;
    addToCart(itemName);
  });
});

// Check if the cart is empty
function checkIfCartIsEmpty() {
  if (cartItemsList.children.length === 0) {
    emptyCartMsg.style.display = "block";
  }
}

// Request to Dish Section
const requestDishModal = document.getElementById("request-dish-modal");
const cancelRequestBtn = document.getElementById("cancel-request");
const submitRequestBtn = document.getElementById("submit-request");
const requestDishForm = document.getElementById("request-dish-form");
const openRequestDishBtn = document.getElementById("open-request-dish");

// Show the modal when button is clicked
openRequestDishBtn.addEventListener("click", () => {
  requestDishModal.style.display = "block";
});

// Close modal function
function closeRequestDishModal() {
  requestDishModal.style.display = "none";
}

// Cancel button click event
cancelRequestBtn.addEventListener("click", closeRequestDishModal);

// Submit button click event
requestDishForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const dishName = document.getElementById("dish-name").value;
  const dishDescription = document.getElementById("dish-description").value;

  if (dishName && dishDescription) {
    alert(
      `Dish Requested: \nName: ${dishName}\nDescription: ${dishDescription}`
    );
    closeRequestDishModal();
  }
});

// Close modal when clicking outside content
window.addEventListener("click", (event) => {
  if (event.target === requestDishModal) {
    closeRequestDishModal();
  }
});

const video = document.getElementById("promo-video");
const playButton = document.querySelector(".play-button");

// Play video on hover
video.addEventListener("mouseenter", () => {
  video.play();
});

// Pause video when mouse leaves
video.addEventListener("mouseleave", () => {
  video.pause();
});

// Play video on button click
playButton.addEventListener("click", () => {
  video.play();
  playButton.style.display = "none"; // Hide play button
});
