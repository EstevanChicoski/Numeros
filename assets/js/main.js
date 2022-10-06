const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav)
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
};

showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

console.log(navLink);

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

const sr = ScrollReveal({
  origin: "top",
  distance: "180px",
  duration: 1500,
  reset: true,
});

sr.reveal(".ola", { delay: 50 });
sr.reveal(".txt", { delay: 50 });
sr.reveal(".imgd", { delay: 50 });
sr.reveal(".social h1", { delay: 50 });
sr.reveal(".dc", { delay: 50 });

sr.reveal(".icon", { delay: 50 });
sr.reveal("", { delay: 50 });
sr.reveal("", { delay: 50 });

sr.reveal("body", { delay: 50 });
sr.reveal("", { delay: 50 });
sr.reveal("", { delay: 50 });
