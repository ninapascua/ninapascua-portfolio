import { useEffect, useRef } from "react";

const targets = ".section h2, .section-label, .about-columns > p, .project-copy, .work .media-note, #skill-list > div, .education, .timeline-item, .awards > article, .certificate, .postcard";

export default function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || !window.IntersectionObserver) return;
    let stop = () => {};

    function setup() {
      stop();
      if (preference.matches) return;
      const seen = new WeakSet();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          target.classList.remove("reveal-pending");
          observer.unobserve(target);
        });
      }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });

      function discover() {
        root.querySelectorAll(targets).forEach((element) => {
          if (seen.has(element)) return;
          seen.add(element);
          // Content already on screen stays immediately readable.
          if (element.getBoundingClientRect().top < window.innerHeight) return;
          const siblings = [...element.parentElement.children];
          const order = siblings.filter((item) => item.matches(targets)).indexOf(element);
          element.style.setProperty("--reveal-delay", `${Math.min(order, 4) * 65}ms`);
          element.classList.add("scroll-reveal", "reveal-pending");
          observer.observe(element);
        });
      }

      function showFocused(event) {
        root.querySelectorAll(".reveal-pending").forEach((element) => {
          if (element.contains(event.target)) {
            element.classList.remove("reveal-pending");
            observer.unobserve(element);
          }
        });
      }

      discover();
      const mutations = new MutationObserver(discover);
      mutations.observe(root, { childList: true, subtree: true });
      root.addEventListener("focusin", showFocused);
      stop = () => {
        observer.disconnect();
        mutations.disconnect();
        root.removeEventListener("focusin", showFocused);
        root.querySelectorAll(".scroll-reveal").forEach((element) => {
          element.classList.remove("scroll-reveal", "reveal-pending");
          element.style.removeProperty("--reveal-delay");
        });
      };
    }

    setup();
    preference.addEventListener("change", setup);
    return () => {
      stop();
      preference.removeEventListener("change", setup);
    };
  }, []);

  return ref;
}
