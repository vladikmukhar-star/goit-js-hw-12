import axios from 'axios';

const API_KEY = '58317296-bbc3976f36cb43a36650e4d76'; // <-- ЗАМІНИ НА СВІЙ КЛЮЧ!
const BASE_URL = 'https://pixabay.com/api/';

/**
 * Отримує зображення з Pixabay API
 * @param {string} query - пошукове слово
 * @param {number} page - номер сторінки
 * @returns {Promise<object>} data з відповіді API
 */
export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });

  return response.data;
}
