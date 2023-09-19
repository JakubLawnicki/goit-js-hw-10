import axios from 'axios';
import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
import { select } from './cat-api.js';
import { error } from './cat-api.js';
import { loader } from './cat-api.js';

const catInfo = document.querySelector('.cat-info');

window.addEventListener('load', fetchBreeds);

select.addEventListener('change', e => {
  const currentValue = e.currentTarget.value;
  catInfo.replaceChildren();
  fetchCatByBreed(currentValue);
  axios
    .get(
      'https://api.thecatapi.com/v1/breeds?api_key=live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue'
    )
    .then(response => {
      response.data.forEach(cat => {
        if (currentValue === cat.id) {
          catInfo.insertAdjacentHTML(
            'beforeend',
            `<div class="content">
                  <h1>${cat.name}</h1>
                  <p class="descr">${cat.description}</p>
                  <p class="temp"><span class="temp-item">Temperament:</span> ${cat.temperament}</p>
                  </div`
          );
        }
      });
    })
    .catch(() => {
      loader.classList.add('loader-inactive');
      error.classList.remove('error-inactive');
    });
});
