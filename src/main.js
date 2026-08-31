import './style.css'
import { gsap } from "gsap";

/* ============================================================= */

/* PRACTICE QUESTION 0 ↓  */

// gsap.to(".item1", {
//   x: 500,
//   duration: 2,
//   rotation: 360,
//   ease: "power2.out"
// });

/* PRACTICE QUESTION 0 ↑  */

/* ============================================================= */

/* PRACTICE QUESTION 1 ↓  */

// gsap.fromTo(
//   ".item2",
//   {
//     x: 0,
//     opacity: 0,
//     scale: 0.5
//   },
//   {
//     x: 500,
//     opacity: 1,
//     scale: 1,
//     duration: 2
//   }
// );

/* PRACTICE QUESTION 1 ↑  */

/* ============================================================= */


/* PRACTICE QUESTION 2 ↓  */

// document.querySelectorAll(".btn").forEach(btn => {

//   btn.addEventListener("mouseenter", () => {

//     if (btn.classList.contains("btn--scale")) {

//       gsap.to(btn, {
//         scale: 1.08,
//         duration: 0.3,
//         ease: "back.out(2)"
//       });

//     }

//     else if (btn.classList.contains("btn--glow")) {

//       gsap.to(btn, {
//         boxShadow: "0 0 25px rgba(79, 124, 255, 0.8)",
//         duration: 0.4,
//         ease: "power2.out"
//       });

//     }

//     else if (btn.classList.contains("btn--wiggle")) {

//       gsap.to(btn, {
//         rotation: 5,
//         duration: 0.1,
//         ease: "power1.inOut",
//         yoyo: true,
//         repeat: 1
//       });

//     }

//   });

//   btn.addEventListener("mouseleave", () => {

//     if (btn.classList.contains("btn--scale")) {

//       gsap.to(btn, {
//         scale: 1,
//         duration: 0.3,
//         ease: "power2.out"
//       });

//     } else if (btn.classList.contains("btn--glow")) {

//       gsap.to(btn, {
//         boxShadow: "0 0 0px rgba(79, 124, 255, 0)",
//         duration: 0.3,
//         ease: "power2.out"
//       });

//     } else if (btn.classList.contains("btn--wiggle")) {

//       gsap.to(btn, {
//         rotation: 0,
//         duration: 0.2,
//         ease: "power2.out"
//       });

//     }
//   });

// });

/* PRACTICE QUESTION 2 ↑  */

/* ============================================================= */

/* PRACTICE QUESTION 3 ↓  */



/* PRACTICE QUESTION 3 ↑  */


const users = [
  { id: 1, name: "Yash", age: 22, active: true },
  { id: 2, name: "Rahul", age: 25, active: false },
  { id: 3, name: "Aman", age: 21, active: true },
  { id: 4, name: "Vikas", age: 28, active: true }
];

const products = [
  { id: 101, name: "Laptop", price: 65000 },
  { id: 102, name: "Mouse", price: 1200 },
  { id: 103, name: "Keyboard", price: 2500 },
  { id: 104, name: "Monitor", price: 18000 }
];

function getActiveUsers(list) {
  return list.filter(user => user.active);
}

function getUserById(list, id) {
  return list.find(user => user.id === id);
}

function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price;
  }, 0);
}

function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const title = document.createElement("h3");
  title.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = formatPrice(product.price);

  const button = document.createElement("button");
  button.textContent = "Add to Cart";

  button.addEventListener("click", () => {
    console.log(`${product.name} added to cart`);
  });

  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(button);

  return card;
}

function renderProducts(list, container) {
  container.innerHTML = "";

  list.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

function searchProducts(list, keyword) {
  return list.filter(product =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

function sortByPrice(list, order = "asc") {
  return [...list].sort((a, b) => {
    if (order === "asc") {
      return a.price - b.price;
    }

    return b.price - a.price;
  });
}

function createUserMessage(user) {
  if (!user) {
    return "User not found";
  }

  return `Welcome back, ${user.name}!`;
}

const activeUsers = getActiveUsers(users);

console.log("Active users:", activeUsers);

const selectedUser = getUserById(users, 2);

console.log(createUserMessage(selectedUser));

const totalPrice = calculateTotal(products);

console.log("Total:", formatPrice(totalPrice));

const expensiveProducts = products.filter(product => {
  return product.price > 5000;
});

console.log("Expensive:", expensiveProducts);

const sortedProducts = sortByPrice(products, "desc");

console.log("Sorted:", sortedProducts);

const result = searchProducts(products, "mouse");

console.log("Search result:", result);

const container = document.querySelector(".products");

if (container) {
  renderProducts(products, container);
}

const state = {
  loading: false,
  error: null,
  data: []
};

function setLoading(value) {
  state.loading = value;
  console.log("Loading:", value);
}

function setError(message) {
  state.error = message;
  console.error("Error:", message);
}

async function loadData() {
  try {
    setLoading(true);

    const response = await fetch("/api/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    state.data = data;

    console.log("Data loaded:", data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}

const numbers = [5, 10, 15, 20, 25];

const doubled = numbers.map(number => number * 2);

const filtered = doubled.filter(number => number > 25);

console.log(doubled);
console.log(filtered);

loadData();