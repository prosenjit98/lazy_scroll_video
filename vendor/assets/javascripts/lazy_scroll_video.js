(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const videoSrc = container.dataset.videoSrc;

          const video = document.createElement("video");
          video.src = videoSrc;
          video.controls = true;
          video.autoplay = true;
          video.muted = true;
          video.playsInline = true;
          video.style.maxWidth = "100%";

          container.innerHTML = "";
          container.appendChild(video);

          obs.unobserve(container);
        }
      });
    });

    document.querySelectorAll(".lazy-video-container").forEach(container => {
      observer.observe(container);
    });
  });
})();