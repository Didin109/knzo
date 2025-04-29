function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

function toggleAkun() {
  const akunStock = document.getElementById("akunStock");
  if (akunStock.style.display === "none") {
    akunStock.style.display = "block";
  } else {
    akunStock.style.display = "none";
  }
}