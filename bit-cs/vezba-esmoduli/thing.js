
class Thing {
    constructor(name, avatar) {

        this.name = name;
        this.avatar = avatar;

    }

    printThings(){
        console.log(` Name: ${this.name} , avatar : ${this.avatar}`);
    }
        
}

export default Thing;
