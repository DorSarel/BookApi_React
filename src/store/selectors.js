export const addBookToFavorites = (state, book) => {
  // check if book already in favorites
  if (
    state.favorites.length > 0 &&
    state.favorites.findIndex(item => item.id === book.id) !== -1
  ) {
    // yes - alert already in favorites (later should change button)
    //alert(`${book.title} already in your favorites`);
    return;
  }
  // add book to start of favorites
  book.isInFavorites = true;
  const favorites = [book, ...this.state.favorites];
  return {
    ...state,
    favorites,
  };
};
