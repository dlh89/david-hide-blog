import Search from './Search';

export default class Navigation {
  constructor() {
    this.toggleBtn = document.querySelector('.nav__toggle-button');
    this.burger = document.querySelector('.nav__burger');
    this.navList = document.querySelector('.nav__list');
    this.navLinks = document.querySelectorAll('.nav__link');
    this.events();
    this.search = new Search();
  }
  events() {
    this.toggleBtn.addEventListener('click', this.toggleNav.bind(this));
  }
  toggleNav() {
    this.burger.classList.toggle('nav__burger--active');
    this.toggleBtn.classList.toggle('nav__toggle-button--active');

    if (!this.navList.style.maxHeight) {
      this.navList.style.maxHeight = `${this.navList.scrollHeight}px`;
      this.navLinks.forEach(item => item.setAttribute('tabindex', '0'));
    } else {
      this.navList.style.maxHeight = null;
      this.navLinks.forEach(item => item.setAttribute('tabindex', '-1'));
      this.search.closeSearch();
    }
  }
}
