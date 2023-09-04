import axios from 'axios';

export function fetchBreeds() {
  return new Promise(resolve => {
    fetch(
      'https://api.thecatapi.com/v1/breeds?api_key=live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue'
    )
      .then(response => {
        return response.json();
      })
      .then(data => resolve(data));
    //   .catch(error => error('Request failed'));
    //   axios
    //     .get(
    //       'https://api.thecatapi.com/v1/breeds?api_key=live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue'
    //     )
    //     .then(result => result.data)
    //     .catch(error => error('Request failed'));
  });
}

export function fetchCatByBreed(breedId) {
  return new Promise(resolve => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?breeds_ids=${breedId}&api_key=live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue`
    ).then(response => {
      fetchBreeds().then(catsList =>
        catsList.forEach(cat => {
          if (cat.id === `${breedId}`) {
            const catsData = {
              name: `${cat.name}`,
              descr: `${cat.description}`,
              temp: `${cat.temperament}`,
            };
            console.log(catsData);
          }
        })
      );
    });
  });
}
