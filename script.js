document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 130) {
      current = section.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });
});
