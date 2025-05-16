document.getElementById("burger-menu").addEventListener("click", function(event) {
  event.stopPropagation(); // Empêche la propagation
  var menu = document.getElementById("overlay-menu");
  var burger = document.getElementById("burger-menu");

  if (menu.style.left === "0px") {
    menu.style.left = "-250px"; // Cache le menu
    burger.classList.remove("rotate")
    burger.classList.add("rotate2");
  } else {
    menu.style.left = "0px"; // Affiche le menu
    burger.classList.remove("rotate2")
    burger.classList.add("rotate");
  }
});

let compteur = 0;
const overlay = document.getElementById("overlayImage");

document.getElementById("logo").addEventListener("click", function(event){
  compteur++
  if (compteur === 10) {
      // Affiche l'image
    overlay.style.display = "flex";

    // Cache l'image après 3 secondes (3000 ms)
    setTimeout(() => {
      overlay.style.display = "none";
      compteur = 0
    }, 300);
  
}})


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
  window.location.href = "https://drive.google.com/uc?export=download&id=1_r6ynsNBFA06Zr3B9SD0bF8WHSGLo4jp";
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
