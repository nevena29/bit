import Thing from "./thing";
import Repos from "./repos";

class RepoThings {
    constructor() { }
    getThings(onGetThings) {
        const repos = new Repos()
        repos.getRepos((items) => {
            const things = [];
            items.forEach((item) => {
                const name = item.name;
                const avatarUrl = item.owner.avatar_url;
                const Thing = new Thing(name, avatarUrl);
                things.push(thing);
            });
            onGetThings(things)
        });

    }
}
export default RepoThings