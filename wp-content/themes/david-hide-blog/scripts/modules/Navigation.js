import Search from './Search';

export default class Navigation {
  constructor() {
    this.toggleBtn = document.querySelector('.nav__toggle-button');
    this.burger = document.querySelector('.nav__burger');
    this.navList = document.querySelector('.nav__list');
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
    } else {
      this.navList.style.maxHeight = null;
      this.search.closeSearch();
    }
  }
}
