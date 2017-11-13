import axios from "axios"

const requestURL="https://api.github.com/search/users?q=marko"

class Users{
    constructor(){}

    getUsers(notifyGetUsers){
        axios.get.requestURL.then((response)=>{
            notifyGetUsers(response.data.items);

        })
    }
}
export default Users