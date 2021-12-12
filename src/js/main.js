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
  gsap.to(cursor, { x: e.x, y: e.y });
};

const cursorBig = () => {
  gsap.to(cursor, { scale: 3, cursor: "pointer" });
};
const cursorSmall = () => {
  gsap.to(cursor, { scale: 1 });
};

window.addEventListener("mousemove", editCursor);

// create change cursor effects
(function () {
  const navItem = document.querySelectorAll(".sidebar__item");

  function animatIt(e) {
    const link = this.querySelector(".link");
    const x = e.offsetX;
    const y = e.offsetY;
    const width = this.offsetWidth;
    const height = this.offsetHeight;
    let move = 25;
    const xMove = (x / width) * (move * 2) - move;
    const yMove = (y / height) * (move * 2) - move;

    link.style.transform = `translate(${xMove}px, ${yMove}px)`;
    // gsap.to(link, { x: xMove, y: yMove, duration: 0.2 });

    if (e.type === "mouseleave") {
      link.style.transform = "";
      // gsap.to(link, { x: 0, y: 0, duration: 0.1 });
    }
  }
  navItem.forEach((b) => b.addEventListener("mousemove", animatIt));
  navItem.forEach((b) => b.addEventListener("mouseleave", animatIt));
})();
