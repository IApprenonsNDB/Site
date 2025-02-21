// Gestion du clic sur le menu burger pour ouvrir/fermer l'overlay menu
document.getElementById("burger-menu").addEventListener("click", function() {
  var menu = document.getElementById("overlay-menu");
  if (menu.style.left === "0px") {
    menu.style.left = "-250px"; // Cache le menu
  } else {
    menu.style.left = "0px"; // Affiche le menu
  }
});

document.getElementById("download-btn").addEventListener("click", function() {
  window.location.href = "public/IApprenons.exe"; 
});