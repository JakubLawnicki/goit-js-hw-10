import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue';
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

export function fetchBreeds() {
  loader.classList.add('loader-inactive');
  error.classList.add('error-inactive');
  return new Promise(resolve => {
    fetch(
      'https://api.thecatapi.com/v1/breeds?api_key=live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue'
    )
      .then(response => {
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => {
        error.classList.remove('error-inactive');
      });
  });
}

export function fetchCatByBreed(breedId) {
  loader.classList.remove('loader-inactive');
  return new Promise(resolve => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?breeds_ids=${breedId}&api_key=live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue`
    )
      .then(response => response.json())
      .then(catItem => {
        const catUrl = catItem[0].url;
        resolve(catUrl);
        loader.classList.add('loader-inactive');
      })
      .catch(error => error.classList.remove('error-inactive'));
  });
}
