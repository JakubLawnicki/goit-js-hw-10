import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
import { key } from './cat-api.js';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
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

select.addEventListener('change', e => {
  const currentValue = e.currentTarget.value;
  catInfo.replaceChildren();
  fetchCatByBreed(currentValue)
    .then(catUrl => {
      const catImage = document.createElement('img');
      catInfo.append(catImage);
      catImage.setAttribute('src', `${catUrl}`);
      catImage.setAttribute('width', '500');
      catImage.setAttribute('height', '500');
    })
    .then(
      fetch(`https://api.thecatapi.com/v1/breeds?${key}`)
        .then(response => response.json())
        .then(data => {
          data.forEach(cat => {
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
    );
});
