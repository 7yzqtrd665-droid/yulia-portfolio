(function(){var lb=document.getElementById('lb'),big=lb.querySelector('img');
document.querySelectorAll('.dip img').forEach(function(i){i.addEventListener('click',function(){big.src=i.src;big.alt=i.alt;lb.style.display='flex';});});
lb.addEventListener('click',function(){lb.style.display='none';});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.style.display='none';});})();

// Подсветка активного раздела в меню при прокрутке.
(function () {
  const links = [...document.querySelectorAll('.nav-links a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        const active = link.getAttribute('href') === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach(section => observer.observe(section));
})();
