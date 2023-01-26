const navList = document.querySelector(".nav-list")
const hamburgerMenu = document.querySelector(".hamburger"); 

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("hamburgeractive");
    navList.classList.toggle("hamburgeractive");
})