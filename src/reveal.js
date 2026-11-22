const SELECTORS = [
  ".section-title",
  ".about-text",
  ".skill-card",
  ".project-card",
  ".contact-text",
  ".contact-links",
];

function init() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add("in-view");
        el.addEventListener(
          "animationend",
          () => el.classList.remove("reveal", "in-view"),
          { once: true },
        );
        io.unobserve(el);
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll(SELECTORS.join(",")).forEach((el) => {
    const index = Array.from(el.parentElement.children).indexOf(el);
    el.style.setProperty("--d", `${Math.min(index, 5) * 0.12}s`);
    el.classList.add("reveal");
    io.observe(el);
  });
}

setTimeout(init, 100);