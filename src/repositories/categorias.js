import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (resposta) => {
      if (resposta.ok) {
        const data = await resposta.json();
        return data;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

function getAllWithVideos() {
  const URL = `${URL_CATEGORIES}?_embed=videos`;
  return fetch(URL)
    .then(async (resposta) => {
      if (resposta.ok) {
        const data = await resposta.json();
        return data;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
