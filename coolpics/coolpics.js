const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);


function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 999) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add ("hide");
    }
}

handleResize();
window.addEventListener("resize",handleResize);

const dialog =document.createElement('dialog');
dialog.innerHTML = 
    <><img src="norris-full.jpeg" alt="mountain image"></img> <button class="close-viewer">X</button></>;

document.body.appendChild(dialog);

const closeButton = dialog.querySelector(".close-viewer");
closeButton.addEventListener("click", ()=> {
    dialog.close
})

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
})