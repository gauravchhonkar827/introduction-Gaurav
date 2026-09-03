const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu?.addEventListener("click", () => {

  if (nav.style.display === "flex") {

    nav.style.display = "none";

  } else {

    nav.style.display = "flex";

    nav.style.position = "absolute";

    nav.style.top = "76px";

    nav.style.right = "6%";

    nav.style.flexDirection = "column";

    nav.style.background = "#101010";

    nav.style.padding = "20px";

    nav.style.border = "1px solid #242424";

    nav.style.borderRadius = "10px";
  }

});


document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", () => {

    if (window.innerWidth <= 850) {

      nav.style.display = "none";

    }

  });

});
