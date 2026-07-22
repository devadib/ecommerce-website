import products from "../data/products.js";

let header = document.querySelector("#header");

window.addEventListener("scroll", (e) => {
  //   console.log(document.documentElement.scrollTop);
  header.classList.toggle("scroll-nav", window.scrollY > 10080);
});

const menuBtn = document.querySelector("#menu-btn");
const closeMenu = document.querySelector("#close-menu");
const mobileMenu = document.querySelector("#mobile-menu");
const overlay = document.querySelector("#overlay");

function openMenu() {
  mobileMenu.classList.replace("translate-x-full", "translate-x-0");

  overlay.classList.remove("opacity-0", "invisible");
  overlay.classList.add("opacity-100", "visible");
}

function closeMenuHandler() {
  mobileMenu.classList.replace("translate-x-0", "translate-x-full");

  overlay.classList.remove("opacity-100", "visible");
  overlay.classList.add("opacity-0", "invisible");
}

menuBtn.addEventListener("click", openMenu);

closeMenu.addEventListener("click", closeMenuHandler);

// کلیک روی پس‌زمینه هم منو را ببندد
overlay.addEventListener("click", closeMenuHandler);

//  coding shop

const shopCotainer = document.querySelector("#cotianer-shop");

// add products
products.forEach((item, index) => {
  console.log(index);
  if (index <= 7) {
    console.log(index);
    addProducts(item);
  } else {
    return;
  }
});

function addProducts(product) {
  shopCotainer.insertAdjacentHTML(
    "beforeend",
    `
         <!-- box -->
            <div
              data-aos="zoom-in-up"
              data-aos-duration="400"
              class="relative flex justify-between flex-col w-full max-w-72 bg-box rounded-2xl overflow-hidden group"
            >
              <!-- image -->
              <div class="w-full">
                <img
                  class="w-full"
                  src="${product.img}"
                  alt="product image"
                />
              </div>
              <!-- description -->
              <div class="w-full p-5">
                <h3 class="font-poppins_semibold text-2xl leading-normal">
                  ${product.name}
                </h3>
                <p class="font-poppins_medium leading-relaxed text-gray-400">
                  ${product.description}
                </p>

                <!-- offered price -->
                <div class="flex items-center gap-4 mt-1">
                  <p class="font-poppins_semibold text-xl">$${product.discountPercent ? Math.floor(product.price - (product.price * product.discountPercent) / 100) : product.price}</p>

                  ${
                    product.discountPercent
                      ? `<div class="relative">
                    <p class="font-poppins_regular text-gray-300">${product.price}</p>
                    <div
                      class="absolute w-full h-px bg-gray-300 inset-y-0 my-auto"
                    ></div>
                  </div>`
                      : ""
                  }

                </div>
              </div>
              <!-- more information -->
              <div
                class="absolute top-0 right-0 w-full h-full bg-black/50 opacity-0 invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible"
              >
                <div
                  class="flex-center flex-col gap-5 w-full h-full text-white"
                >
                  <!-- add to cart -->
                  <button
                    class="w-40 h-12 bg-primary-color rounded-lg font-poppins_bold hover:bg-primary-color/80 transition-colors duration-300 ease-in-out"
                  >
                    Add to Cart
                  </button>

                  <div class="flex-center gap-5">
                    <!-- go to product page -->
                    <a class="flex items-center gap-1" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <span>View Details</span>
                    </a>
                    <!-- wishlist -->
                    <a class="flex items-center gap-1" href="#">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                          stroke="white"
                          stroke-width="1.8"
                        />
                      </svg>
                      <span>Like</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
      
      
      `,
  );
}
