(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuCloseRef = document.querySelector('[data-menu-close]');
  const menuLinkRef = document.querySelector('.js-close-menu');
  console.log(menuLinkRef);
  menuBtnRef.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });

  mobileMenuCloseRef.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });

  menuLinkRef.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });

  // Найти все ссылки начинающиеся на #
  const anchors = document.querySelectorAll('a[href^="#"]');

  // Цикл по всем ссылкам
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
      // Плавная прокрутка до элемента с id = href у ссылки
      document.querySelector(goto).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
})();
