export default class Navigation {
  constructor() {
    console.log('TODO: complete navigation module');
    const toggleBtn = document.querySelector('.nav__toggle-button');
    toggleBtn.addEventListener('click', this.toggleNav);
  }
  toggleNav() {
    console.log('toggle nav');
  }
}
