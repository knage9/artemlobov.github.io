const span = document.querySelector('.karaoke span');

window.addEventListener('scroll', () => {
  const t = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  span.style.backgroundPosition = `${-t * 100}% 0`;
});