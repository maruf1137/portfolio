// navbar

const openSidebarBtn = document.querySelector(".nav__bars");

const activeSidebar = () => {
  const navbar = document.querySelector(".nav");
  navbar.classList.toggle("active-sidebar");
};

openSidebarBtn.addEventListener("click", activeSidebar);

// custom cursor

const cursor = document.querySelector(".cursor");
gsap.to(cursor, { xPercent: -50, yPercent: -50 });
const editCursor = (e) => {
  // const { clientX: x, clientY: y } = e;
  // cursor.style.left = x + "px";
  // cursor.style.top = y + "px";

  gsap.to(cursor, { x: e.x, y: e.y });
};

const cursorBig = () => {
  gsap.to(cursor, { scale: 3, cursor: "pointer" });
};
const cursorSmall = () => {
  gsap.to(cursor, { scale: 1 });
};

window.addEventListener("mousemove", editCursor);
// openSidebarBtn.addEventListener("mouseover", cursorBig);
// openSidebarBtn.addEventListener("mouseout", cursorSmall);

// create sidebar animation with gsap
/*
const sidebarOpen = () => {
  const sidebartl = gsap.timeline();
  sidebartl.to(".bars-bg", { scale: 1000 });
  sidebartl.to(".sidebar", { display: "block", opacity: 1, x: 0 });
};

openSidebarBtn.addEventListener("click", function () {
  activeSidebar();
  console.log(navbar.classList === "sidebar-active");
  // console.log(navbar.classList);
});
*/
