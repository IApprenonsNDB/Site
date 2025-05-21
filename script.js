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

// Animation de scroll pour les éléments avec la classe 'scroll-animate'
document.addEventListener('DOMContentLoaded', function () {
  const scrollElements = document.querySelectorAll('.scroll-animate');

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  scrollElements.forEach(el => scrollObserver.observe(el));

  // Gestion du menu burger (seulement si présent)
  const burgerMenu = document.getElementById("burger-menu");
  const overlayMenu = document.getElementById("overlay-menu");
  if (burgerMenu && overlayMenu) {
    burgerMenu.addEventListener("click", function(event) {
      event.stopPropagation();
      if (overlayMenu.style.left === "0px") {
        overlayMenu.style.left = "-250px";
      } else {
        overlayMenu.style.left = "0px";
      }
    });

    document.addEventListener("click", function(event) {
      if (overlayMenu.style.left === "0px" &&
          !overlayMenu.contains(event.target) &&
          !burgerMenu.contains(event.target)) {
        overlayMenu.style.left = "-250px";
      }
    });
  }

  // Gestion vidéo et bouton téléchargement (seulement si présents)
  const showVideoBtn = document.getElementById('show-video-btn');
  const videoContainer = document.getElementById('video-container');
  const closeVideoBtn = document.getElementById('close-video-btn');
  const downloadBtn = document.getElementById("download-btn");

  if (showVideoBtn && videoContainer && closeVideoBtn) {
    const video = videoContainer.querySelector('video');
    showVideoBtn.addEventListener('click', function () {
      videoContainer.style.display = 'block';
      showVideoBtn.style.display = 'none';
      if (video) video.play();
    });

    closeVideoBtn.addEventListener('click', function () {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      videoContainer.style.display = 'none';
      showVideoBtn.style.display = 'inline-block';
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      window.location.href = "public/IApprenons_installeur.exe";
    });
  }
});
