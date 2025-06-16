// Toggle show/hide for "Kinh nghiệm" content
const btn = document.getElementById('toggle-exp');
const content = document.getElementById('exp-content');
btn.addEventListener('click', () => {
  content.classList.toggle('hidden');
});
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  btn.addEventListener('click', () => menu.classList.toggle('show'));
});
