import axios from 'axios';
import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';

axios.defaults.headers.common['x-api-key'] =
  'live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue';

const axios = require('axios');
const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
let options = [];
let catInfoArray = [];

window.addEventListener('load', fetchBreeds);

fetchBreeds().then(catsList => {
  catsList.forEach(e => {
    const option = document.createElement('option');
    option.setAttribute('value', `${e.id}`);
    option.textContent = `${e.name}`;
    options.push(option);
  });
  select.append(...options);
});

select.addEventListener('change', e => {
  fetchCatByBreed(e.currentTarget.value);
});

// fetchCatByBreed().then(catItem => {
//   console.log(catItem);
//   catInfoArray.push(document.createElement('img'));
//   catInfoArray.push(document.createElement('h1'));
//   catInfoArray.push(document.createElement('p'));
//   catInfoArray.push(document.createElement('span'));
//   catInfo.append(...catInfoArray);
//   const catImage = document.querySelector('img');
//   //   catImage.setAttribute('src', );
//   console.log(catImage);
// });
