const axios = require('axios');
const catAsciiFaces = require('cat-ascii-faces');
const { getRandomInt } = require('sutti-int');

async function getRandomCat() {
  try {
    const response = await axios.get('https://aws.random.cat/meow');
    return response.data.file;
  } catch (error) {
    console.error('Error fetching cat image:', error.message);
    return null;
  }
}

function displayRandomCat() {
  const randomCat = catAsciiFaces();
  const randomNum = getRandomInt(2,444);
  console.log(randomNum)
  console.log(randomCat);
}

module.exports = {
  getRandomCat,
  displayRandomCat
};
