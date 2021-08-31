import axios from "axios";

export default {

    getInfo: function() {
        return axios.get("https://www.breakingbadapi.com/api/");
    }
};