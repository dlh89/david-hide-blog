export default class Search {
  constructor() {
    this.searchButton = document.querySelector('#searchButton');
    this.searchInput = document.querySelector('.search__input');
    this.search = document.querySelector('.search');
    this.searchActive = false;
    this.typingTimer;
    this.resultsDiv = document.querySelector('.search__results');
    this.spinnerVisible = false;
    this.previousValue;
    this.events();
  }
  events() {
    this.searchButton.addEventListener('click', this.activateSearch.bind(this));
    this.searchInput.addEventListener('keyup', this.typingLogic.bind(this));
  }
  typingLogic(e) {
    if (this.searchInput.value !== this.previousValue) {
      clearTimeout(this.typingTimer);

      if (this.searchInput.value) {
        if (!this.spinnerVisible) {
          this.resultsDiv.innerHTML = '<div class="u-spinner"></div>';
          this.spinnerVisible = true;
        }
        this.typingTimer = setTimeout(this.getResults.bind(this), 1000);
        this.previousValue = this.searchInput.value;
      } else {
        this.resultsDiv.innerHTML = '';
        this.spinnerVisible = false;
      }
    }
  }
  getResults() {
    // Make the AJAX request to WordPress API
    const xhr = new XMLHttpRequest();
    const url = `${blogData.root_url}/wp-json/wp/v2/posts?search=${this.searchInput.value}`;
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const results = JSON.parse(xhr.responseText);
        console.log(results);
        this.resultsDiv.innerHTML = '';
        this.spinnerVisible = false;
        if (results.length) {
          this.resultsDiv.innerHTML = `
          <ul>
            ${results
    .map(post =>
      `<li class="search__item"><a href="${post.link}">${post.title.rendered}</a></li>`)
    .join('')}
          </ul>`;
        } else {
          this.resultsDiv.innerHTML = '<li class="search__item">No results found</li>';
        }
      }
    };
    xhr.send();
  }
  activateSearch(e) {
    e.preventDefault();
    this.searchButton.classList.toggle('nav__link--active');
    this.search.classList.toggle('search--active');
    if (!this.search.style.maxHeight) {
      this.search.style.maxHeight = `${this.search.scrollHeight}px`;
      this.searchInput.setAttribute('aria-hidden', false);
      this.searchActive = true;
    } else {
      this.search.style.maxHeight = null;
      this.searchInput.setAttribute('aria-hidden', true);
      this.searchActive = false;
    }
  }
}
