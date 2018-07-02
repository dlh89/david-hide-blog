export default class Search {
  constructor() {
    this.searchButton = document.querySelector('#searchButton');
    this.searchInput = document.querySelector('.search-bar__input');
    this.search = document.querySelector('.search-bar');
    this.searchActive = false;
    this.typingTimer;
    this.resultsDiv = document.querySelector('.search-bar__results');
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
    // close search if esc pressed
    if (e.keyCode === 27) {
      this.closeSearch();
    }
  }
  getResults() {
    return new Promise((resolve, reject) => {
      // Make the AJAX request to WordPress API
      const xhr = new XMLHttpRequest();
      const url = `${blogData.root_url}/wp-json/dh/v1/search?term=${this.searchInput.value}`;
      xhr.open('GET', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const results = JSON.parse(xhr.responseText);
            this.resultsDiv.innerHTML = '';
            this.spinnerVisible = false;
            resolve(results);
          } else {
            reject();
          }
        }
      };
      xhr.send();
    }).then(this.updateResultsDivSuccess.bind(this), this.updateResultsDivFailure.bind(this));
  }
  updateResultsDivSuccess(results) {
    if (this.searchInput.value) {
      if (results.length) {
        this.resultsDiv.innerHTML = `
        <ul>
          ${results
    .map(post =>
      `<a href="${
        post.link
      }" class="search-bar__link"><li class="search-bar__item"><span>${
        post.title
      } <span class="search-bar__category">${post.type}</span></li></a>`)
    .join('')}
        </ul>`;
      } else {
        this.resultsDiv.innerHTML = '<li class="search-bar__item">No results found</li>';
      }
    }
  }
  updateResultsDivFailure() {
    this.resultsDiv.innerHTML =
      '<li class="search-bar__item">There was an error retrieving search data.</li>';
  }
  activateSearch(e) {
    e.preventDefault();
    this.searchButton.classList.toggle('nav__search-button--active');
    this.search.classList.toggle('search-bar--active');
    if (!this.search.style.maxHeight) {
      this.search.style.maxHeight = `${this.search.scrollHeight}px`;
      this.searchInput.setAttribute('aria-hidden', false);
      this.searchInput.setAttribute('tabindex', '0');
      this.searchInput.focus();
      this.searchActive = true;
    } else {
      this.closeSearch();
    }
  }
  closeSearch() {
    this.searchActive = false;
    this.search.style.maxHeight = null;
    this.searchInput.setAttribute('aria-hidden', true);
    this.searchInput.setAttribute('tabindex', '-1');
    this.resultsDiv.innerHTML = '';
    this.searchInput.value = '';
    this.searchButton.classList.remove('nav__search-button--active');
    this.search.classList.remove('search-bar--active');
  }
}
