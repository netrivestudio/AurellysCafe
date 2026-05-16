 const menuData = [
  {
    name: "Caramel Latte",
    price: "Rp 28.000",
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c",

    description:
      "Espresso creamy dengan caramel premium.",

    bestSeller: true
  },

  {
    name: "Matcha Latte",
    price: "Rp 30.000",
    category: "Non Coffee",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",

    description:
      "Matcha creamy dengan rasa lembut.",

    bestSeller: false
  },

  {
    name: "Cheese Burger",
    price: "Rp 35.000",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",

    description:
      "Burger juicy dengan cheese premium.",

    bestSeller: true
  }
];

const menuContainer =
  document.getElementById(
    "menuContainer"
  );

const searchInput =
  document.getElementById(
    "searchInput"
  );

const categoryButtons =
  document.querySelectorAll(
    ".category-btn"
  );

function displayMenu(data) {

  menuContainer.innerHTML = "";

  data.forEach((menu) => {

    const card =
      document.createElement("div");

    card.classList.add("menu-card");

    const waMessage =
      `Halo Aurellys Cafe, saya ingin pesan ${menu.name}`;

    const waLink =
      `https://wa.me/6281234567890?text=${encodeURIComponent(waMessage)}`;

    card.innerHTML = `
    
      <div style="position: relative;">

        ${
          menu.bestSeller
          ? `
            <span class="badge">
              BEST SELLER
            </span>
          `
          : ""
        }

        <img 
          src="${menu.image}" 
          class="menu-image"
        />

      </div>

      <div class="menu-content">

        <h2 class="menu-title">
          ${menu.name}
        </h2>

        <p class="menu-price">
          ${menu.price}
        </p>

        <p class="menu-description">
          ${menu.description}
        </p>

        <a 
          href="${waLink}"
          target="_blank"
          class="order-btn"
        >
          Pesan Sekarang
        </a>

      </div>
    `;

    menuContainer.appendChild(card);

  });

}

displayMenu(menuData);

/* SEARCH */

searchInput.addEventListener(
  "keyup",
  (e) => {

    const keyword =
      e.target.value.toLowerCase();

    const filteredMenu =
      menuData.filter((menu) => {

        return menu.name
          .toLowerCase()
          .includes(keyword);

      });

    displayMenu(filteredMenu);

  }
);

/* CATEGORY FILTER */

categoryButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      categoryButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const category =
        button.innerText;

      if (category === "Semua") {

        displayMenu(menuData);

      } else {

        const filteredMenu =
          menuData.filter((menu) => {

            return (
              menu.category === category
            );

          });

        displayMenu(filteredMenu);

      }

    }
  );

});
if ("serviceWorker" in navigator) {

  window.addEventListener(
    "load",
    () => {

      navigator.serviceWorker.register(
        "service-worker.js"
      );

    }
  );

}
