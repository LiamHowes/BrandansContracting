export default function scrollAnimate() {
  const elements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const visibleRatio = entry.intersectionRatio; // 0 to 1
        if (entry.isIntersecting || visibleRatio > 0.25) { // 25% visible before triggering
          entry.target.classList.add("animate-fadeInUp");
          observer.unobserve(entry.target); // run only once
        }
      });
    },
  );

  elements.forEach((el) => observer.observe(el));
}