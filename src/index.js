import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
import { select } from './cat-api.js';

const catInfo = document.querySelector('.cat-info');

window.addEventListener('load', fetchBreeds);

select.addEventListener('change', e => {
  const currentValue = e.currentTarget.value;
  catInfo.replaceChildren();
  fetchCatByBreed(currentValue);
});
