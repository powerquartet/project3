import axios from "axios";

export default {
    // Gets all users
    getUsers: function () {
        return axios.get("/api/users");
    },
    // Gets the user with the given id
    getsUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    updateUser: function (id, userData) {
        console.log("in APIU - updating", userData)
        return axios.put("/api/users/" + id, userData)

    },
    // Deletes the user with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a user to the database
    saveUser: function (userData) {
        console.log("in APIU - creating", userData);
        return axios.post("/api/users", userData);

    }


};