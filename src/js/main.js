// navbar

const openSidebarBtn = document.querySelector(".nav__bars");

const openSidebar = () => {
  const navbar = document.querySelector(".nav");
  navbar.classList.toggle("active-sidebar");
};

openSidebarBtn.addEventListener("click", openSidebar);
