
// 给页面元素添加css类
function addClassToSelector(selector, className) {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.add(className);
    }
  }
  
  addClassToSelector("#container > div.wrapper > nav > div.navbar__brand > a.navbar__title-link > h6", 'colorful');
  addClassToSelector("#container > div.wrapper > header > div > div.site-header__title.site-header__title--shadow", 'colorful2');
  addClassToSelector("#typewriter > span.Typewriter__wrapper", 'colorful');

