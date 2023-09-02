import axios from 'axios';
import { fetchBreeds } from './cat-api.js';

axios.defaults.headers.common['x-api-key'] =
  'live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue';

const select = document.querySelector('.breed-select');
let options = [];

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
