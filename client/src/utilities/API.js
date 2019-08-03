import axios from   "axios"

export default {
    // GET BOOKS FROM GOGGLE SEARCH
    getGoogleSearchBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // GETS ALL THE BOOKS
    getBooks: function () {
        return axios.get("/api/books");
    },

    // GETS BOOKS WITH ID GIVEN
    getBook: function (id) {
        return axios.get("/api/books" + id);
    },

    // SAVED A BOOK TO DB
    saveBook: function (saveBooks) {
        return axios.post("/api/books", savedBooks);
    },

    // DELETES THE BOOK W/ID GIVEN
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
 }