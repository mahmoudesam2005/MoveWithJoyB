let ht = document.querySelector("html");
let cd = document.querySelector(".clickd");
let cl = document.querySelector(".clickl");

cl.classList.add("hide");

cd.addEventListener("click", () => {
    ht.setAttribute("data-bs-theme", "dark");
    cd.classList.add("hide");
    cl.classList.remove("hide");
})

cl.addEventListener("click", () => {
    ht.setAttribute("data-bs-theme", "");
    cd.classList.remove("hide");
    cl.classList.add("hide");
})

