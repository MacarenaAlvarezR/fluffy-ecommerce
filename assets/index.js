
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menuLinks");

btn.addEventListener("click", () => {
    menu.classList.toggle("show");
});
