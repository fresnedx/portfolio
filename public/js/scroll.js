function scrollToSection(id, duration = 1000) {
  const target = document.querySelector(id);
  const startPosition = window.pageYOffset;
  const targetPosition = target.getBoundingClientRect().top;
  const startTime = performance.now();

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startPosition + targetPosition * progress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

document.querySelectorAll(".nav-middle a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href");
    scrollToSection(target, 200); // 200ms
  });
});
