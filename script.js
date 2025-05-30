document.addEventListener('DOMContentLoaded', function () {
  console.log("Script bien chargé ✅");

  // Menu burger
  const burger = document.getElementById("burger-menu");
  const menu = document.getElementById("overlay-menu");

  if (burger && menu) {
    burger.addEventListener("click", function (event) {
      event.stopPropagation();
      if (menu.style.left === "0px") {
        menu.style.left = "-250px";
        burger.classList.remove("rotate");
        burger.classList.add("rotate2");
      } else {
        menu.style.left = "0px";
        burger.classList.remove("rotate2");
        burger.classList.add("rotate");
      }
    });

    document.addEventListener("click", function (event) {
      if (menu.style.left === "0px" && !menu.contains(event.target) && !burger.contains(event.target)) {
        menu.style.left = "-250px";
      }
    });
  }

  // Easter egg sur le logo
  const logo = document.getElementById("logo");
  const overlayImage = document.getElementById("overlayImage");
  let compteur = 0;

  if (logo && overlayImage) {
    logo.addEventListener("click", function () {
      compteur++;
      if (compteur === 10) {
        overlayImage.style.display = "flex";
        setTimeout(() => {
          overlayImage.style.display = "none";
          compteur = 0;
        }, 300);
      }
    });
  }

  // Bouton de téléchargement
  const downloadBtn = document.getElementById("download-btn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      window.location.href = "https://github.com/IApprenonsNDB/Site/releases/download/v1.0.2/IApprenons_installeur.exe";
    });
  }

  // Lecture vidéo style popup
  const showVideoBtn = document.getElementById("show-video-btn");
  const videoPopup = document.getElementById("video-popup");
  const closeVideoBtn = document.getElementById("close-video-btn");
  const video = document.getElementById("video");

  if (showVideoBtn && videoPopup && closeVideoBtn && video) {
    showVideoBtn.addEventListener('click', function () {
      videoPopup.style.display = 'block';
      video.play();
    });

    closeVideoBtn.addEventListener('click', function () {
      video.pause();
      video.currentTime = 0;
      videoPopup.style.display = 'none';
    });
  }

  // Animation de scroll
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
});
