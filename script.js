const menuData = [
  {
    name: "Caramel Latte",
    price: "Rp 28.000",
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c",

    description:
      "Espresso creamy dengan caramel premium."
  },

  {
    name: "Matcha Latte",
    price: "Rp 30.000",
    category: "Non Coffee",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",

    description:
      "Matcha creamy dengan rasa lembut."
  },

  {
    name: "Cheese Burger",
    price: "Rp 35.000",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",

    description:
      "Burger juicy dengan cheese premium."
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

function displayMenu(data) {

  menuContainer.innerHTML = "";

  data.forEach((menu) => {

    const card =
      document.createElement("div");

    card.classList.add("menu-card");

    card.innerHTML = `
      <img 
        src="${menu.image}" 
        class="menu-image"
      />

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

      </div>
    `;

    menuContainer.appendChild(card);

  });

}

displayMenu(menuData);

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
