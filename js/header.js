const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

function openMenu() {
  menu.style.maxHeight = menu.scrollHeight + "px";
}

function closeMenu() {
  menu.style.maxHeight = "0";
}

function toggleMenu() {
  if (menu.style.maxHeight && menu.style.maxHeight !== "0px") {
    closeMenu();
  } else {
    openMenu();
  }
}

menuBtn.onclick = toggleMenu;

document.querySelectorAll(".menu-link").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && e.target !== menuBtn) {
    closeMenu();
  }
});
