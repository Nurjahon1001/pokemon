const heart_btn = document.querySelector(".canvas_heart");
const chevron_right_btn = document.querySelector(".fa-chevron-right");
const offcanvas = document.querySelector(".offcanvas");

heart_btn.addEventListener("click", () => {
   offcanvas.classList.toggle("active");
})

chevron_right_btn.addEventListener("click", () => {
   offcanvas.classList.remove("active");
})