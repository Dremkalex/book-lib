export const getVisibleBooks = (allBooks, filter) => {
    return allBooks.filter(book => book.title.toLowerCase().includes(filter.toLowerCase()))
};
