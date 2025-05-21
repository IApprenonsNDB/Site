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
      window.location.href = "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9mNTI0ZmRlMWQ2ZTMzN2VhL0VRTlU3ZW5xR2pGSWdoSW9fNldzOE5zQmZqVE9QdExTR3NTOEMyOFZHcU5lVFE%5FZT1yOHdBdGE&cid=F524FDE1D6E337EA&id=F524FDE1D6E337EA%21se9ed54031aea4831821228ffa5acf0db&parId=F524FDE1D6E337EA%21104&o=OneUp";
    });
  }

  // Lecture vidéo
  const showVideoBtn = document.getElementById("show-video-btn");
  const videoContainer = document.getElementById("video-container");
  const closeVideoBtn = document.getElementById("close-video-btn");

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
