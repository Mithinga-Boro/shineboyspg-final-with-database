// Mobile menu toggle
const menuBtn = document.getElementById('mobileMenuBtn');
const closeBtn = document.getElementById('mobileMenuClose');
const navLinks = document.getElementById('navLinks');
if (menuBtn) menuBtn.onclick = () => navLinks.classList.add('mobile-open');
if (closeBtn) closeBtn.onclick = () => navLinks.classList.remove('mobile-open');