import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(video) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (resposta) => {
      if (resposta.ok) {
        const data = await resposta.json();
        return data;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  create,
};
