const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);


function handleResize() {
    if (window.innerWidth > 999) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add ("hide");
    }
}

handleResize();
window.addEventListener("resize",handleResize);



const dialog = document.querySelector("dialog");

const closeButton = dialog.querySelector(".close-viewer");
closeButton.addEventListener("click", () => dialog.close());

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {dialog.close();
  }
    });

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        const dialogImg = dialog.querySelector("img");
        dialogImg.src = "norris-full.jpeg";
        dialog.showModal();
    });
 });