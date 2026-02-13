
const SITE = {
  name: "Technical Hub — CREAPI + AI",
  subtitle: "Architecture • DevSecOps • AI • Government Systems",
  footer: "CREA-PI • Innovation and Digital Transformation • Tech Hub — @s-v7",
};

function applySiteConfig() {

  const titleEl = document.querySelector("[data-site-title]");
  if (titleEl) titleEl.textContent = SITE.name;

  document.querySelectorAll("[data-site-name]").forEach((el) => {
    el.textContent = SITE.name;
  });

  const subtEl = document.querySelector("[data-site-subtitle]");
  if (subtEl) subtEl.textContent = SITE.subtitle;

  const footEl = document.querySelector("[data-site-text]");
  if (footEl) footEl.textContent = SITE.footer;
}

document.addEventListener("DOMContentLoaded", applySiteConfig);

