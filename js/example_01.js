const book1 = {
    author: C.Dikkens,
    title: 'Oliver Tweest',
    price: 200,
    totalPages: 674,
    currentPage: 500,
}
const book2 = {
    author: J.Rolling,
    title: 'Harry Potter',
    price: 350,
    totalPages: 604,
    currentPage: 604,
}

const filter = (array, callback) => {
    const result = [];
    for (const item of array) {
        const passed = callback(item);
        if (passed) {
            result.push(item);
        }
    }
    return result;
}

const library = {
    list: [book1, book2],
    favorite: [book1],
    bye(bookToBye) {
        let isBookExist = false;
        for (const book of this.list) {
            if (book.title.toLowerCase() === bookToBye.toLowerCase()) {
                isBookExist = true;
            }
        }
        if (!isBookExist) {
            this.list.push(bookToBye);
        }
    },
    sell(title) {
        for (const book of this.list) {
            if (book.title.toLowerCase() === title.toLowerCase()) {
                const indexToRemove = this.list.indexOf(book)
                this.list.splice(indexToRemove, 1)
                return book;
            }
        }
    },
    addToFavorite(bookToFavorite) {
         let isBookExist = false;
        for (const book of this.favorite) {
            if (book.title.toLowerCase() === bookToFavorite.title.toLowerCase()) {
                isBookExist = true;
            }
        }
        if (!isBookExist) {
            this.favorite.push(bookToFavorite);
        }
    },
    removeFromFavorite(bookOutFavorite) {
        for (const book of this.favorite) {
            if (book.title.toLowerCase() === bookOutFavorite.title.toLowerCase()) {
                const indexToRemove = this.favorite.indexOf(book)
                this.favorite.splice(indexToRemove, 1)
            }
        }
    },
    countFavoriteBook() {
        return this.favorite.length;
    },
    getFinishedBooks() {
        return filter(this.list, (book) => book.totalPages === book.currentPage)
    },
    getBooksByAuthor(author) {
        return filter(this.list, (book) => book.author.toLowerCase() === author.toLowerCase())        
    },

}