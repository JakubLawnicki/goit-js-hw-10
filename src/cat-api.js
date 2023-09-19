import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue';

export const loader = document.querySelector('.loader');
export const error = document.querySelector('.error');
export const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
let options = [];

export function fetchBreeds() {
  error.classList.add('error-inactive');

  axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      response.data.forEach(e => {
        const option = document.createElement('option');
        option.setAttribute('value', `${e.id}`);
        option.textContent = `${e.name}`;
        options.push(option);
      });
      select.append(...options);
      loader.classList.add('loader-inactive');
    })
    .catch(() => {
      loader.classList.add('loader-inactive');
      error.classList.remove('error-inactive');
    });
}

export function fetchCatByBreed(breedId) {
  error.classList.add('error-inactive');
  loader.classList.remove('loader-inactive');

  axios
    .get(
      `https://api.thecatapi.com/v1/images/search?breeds_ids=${breedId}&&api_key=live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue`
    )
    .then(response => {
      const catImage = document.createElement('img');
      catInfo.append(catImage);
      catImage.setAttribute('src', `${response.data[0].url}`);
      catImage.setAttribute('width', '500');
      catImage.setAttribute('height', '500');
      loader.classList.add('loader-inactive');
    })
    .catch(() => {
      loader.classList.add('loader-inactive');
      error.classList.remove('error-inactive');
    });
}
