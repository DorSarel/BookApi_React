import axios from 'axios';
const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
const API_KEY = 'AIzaSyAdjD6AcJ4csE8IrUVaXn-sU0PFcKCCz1c';

const serializeBook = item => {
  return {
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
    img: item.volumeInfo.imageLinks.smallThumbnail,
    isInFavorites: false,
  };
};

export const getData = searchTerm => {
  return axios
    .get(`${baseUrl}${searchTerm}&key=${API_KEY}`)
    .then(response => response.data)
    .then(data => {
      return data.items.map(item => serializeBook(item));
    })
    .catch(error => console.log(error));
};
