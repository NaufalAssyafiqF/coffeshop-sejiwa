const navDropdown = document.querySelector(".nav-dropdown");
const iconList = document.querySelector(".ph-list");

iconList.addEventListener("click", () => {
    navDropdown.classList.toggle("active");
})
