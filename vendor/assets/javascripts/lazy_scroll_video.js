(function () {
  document.addEventListener("DOMContentLoaded", function () {
    console.log('initiating lazy scroll video');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const videoSrc = container.dataset.videoSrc;

          const video = document.createElement("video");
          video.src = videoSrc;
          video.controls = true;
          video.autoplay = false;
          video.muted = true; // Autoplay without mute won't work in many browsers
          video.playsInline = true;
          video.style.width = "100%";
          video.style.height = "100%";
          video.style.objectFit = "contain";

          container.innerHTML = "";
          container.appendChild(video);

          obs.unobserve(container);
        }
      });
    });

    document.querySelectorAll(".lazy-video-container").forEach(container => {
      console.log('initiating content observer');
      observer.observe(container);
    });
  });
})();