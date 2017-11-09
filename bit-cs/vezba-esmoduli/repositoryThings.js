import Repository from "./repository";
import Thing from "./thing"

class getRepoThings {

    getThings(thingsHandler) {
        let repository = new Repository ();
        
        repository.getRepository((items)=> {
            let things = [];
            
            for (let i = 0; i < items.length; i++) {
                let element = items[i];
                let name = element.name;
                let avatar = element.avatar;

                const thing = new Thing(name, avatar);
                things.push(thing);
                  
            }
            
            thingsHandler(things);

            
        })
    }
};

export default getRepoThings;