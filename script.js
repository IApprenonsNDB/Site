// Gestion du clic sur le menu burger pour ouvrir/fermer l'overlay menu
document.getElementById("burger-menu").addEventListener("click", function(event) {
  event.stopPropagation(); // Empêche la propagation pour ne pas déclencher le clic "hors menu"
  var menu = document.getElementById("overlay-menu");
  if (menu.style.left === "0px") {
    menu.style.left = "-250px"; // Cache le menu
  } else {
    menu.style.left = "0px"; // Affiche le menu
  }
});

// Ferme le menu si on clique hors de celui-ci
document.addEventListener("click", function(event) {
  var menu = document.getElementById("overlay-menu");
  var burger = document.getElementById("burger-menu");

  if (menu.style.left === "0px" && !menu.contains(event.target) && !burger.contains(event.target)) {
    menu.style.left = "-250px"; // Cache le menu
  }
});

// Gestion du bouton de téléchargement
document.getElementById("download-btn").addEventListener("click", function() {
  window.location.href = "public/IApprenons_installeur.exe"; 
});

document.addEventListener('DOMContentLoaded', function () {
  const showVideoBtn = document.getElementById('show-video-btn');
  const videoContainer = document.getElementById('video-container');
  const closeVideoBtn = document.getElementById('close-video-btn');
  const video = videoContainer.querySelector('video'); // Sélectionne la vidéo dans le conteneur

  showVideoBtn.addEventListener('click', function () {
    videoContainer.style.display = 'block';
    showVideoBtn.style.display = 'none';
    if (video) {
      video.play();
    }
  });

  closeVideoBtn.addEventListener('click', function () {
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    videoContainer.style.display = 'none';
    showVideoBtn.style.display = 'inline-block';
  });
});
