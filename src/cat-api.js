export function fetchBreeds() {
  return new Promise((resolve, reject) => {
    fetch(
      'https://api.thecatapi.com/v1/breeds?api_key=live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue'
    )
      .then(response => {
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => error('Request failed'));
  });
}
