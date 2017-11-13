import axios from "axios";
const requestURL="https://api.github.com/search/repositories?q=explore&per_page=10";
class Repos{
    constructor()
    getRepos(notifyGetRepos){
        axios.get(requestURL).then((response)=>{
             notifyGetRepos(response.data.items)
        })
    }
}
export default Repos;