/* =========================================================
   BLACK HORSE — Interactions
   ========================================================= */

// Navbar: darken + shrink on scroll
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 40) {
    nav.classList.add('is-scrolled');
  } else {
    nav.classList.remove('is-scrolled');
  }
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
  burger.classList.toggle('is-active');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('is-open'));
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => io.observe(el));

// Stagger card reveals within their group
document.querySelectorAll('.cards, .services__grid').forEach(group => {
  Array.from(group.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.1}s`;
  });
});
