export default class Search {
  constructor() {
    console.log('hello from search');
    this.searchButton = document.querySelector('#searchButton');
    // this.search = document.querySelector('.search');
    this.events();
  }
  events() {
    this.searchButton.addEventListener('click', this.activateSearch);
  }
  activateSearch() {
    console.log(this.search);
    const search = document.querySelector('.search');
    search.classList.toggle('search--active');
    if (!search.style.maxHeight) {
      search.style.maxHeight = `${search.scrollHeight}px`;
    } else {
      search.style.maxHeight = null;
    }
  }
}
