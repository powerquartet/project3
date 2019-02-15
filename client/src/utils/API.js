import axios from "axios";

export default {
    // Gets all books
    getUsers: function () {
        return axios.get("/api/users");
    },
    // Gets the book with the given id
    getsUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    // Deletes the book with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a book to the database
    saveUser: function (userData) {
        console.log("in APIU", userData);
        return axios.post("/api/users", userData);

    }
};