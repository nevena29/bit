import axios from "axios";

class Repository {

    getRepository(handler) {

        this.url = axios.get("https://api.github.com/search/repositories?q=explore").then(function (response) {

            handler(response.data.items);

        });

    }
}

export default Repository;