export const addBookToFavorites = (state, book) => {
  // check if book already in favorites
  if (
    state.favorites.length > 0 &&
    state.favorites.findIndex(item => item.id === book.id) !== -1
  ) {
    // yes - alert already in favorites (later should change button)
    alert(`${book.title} is already in favorites books`);
    return {
      ...state,
    };
  }

  book.isInFavorites = true;
  return {
    ...state,
    books: [...state.books],
    favorites: [book, ...state.favorites],
  };
};
