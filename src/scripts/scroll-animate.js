export default function scrollAnimate() {
  const elements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInUp");
          observer.unobserve(entry.target); // run only once
        }
      });
    },
    { threshold: 0.25 } // 25% visible before triggering
  );

  elements.forEach((el) => observer.observe(el));
}