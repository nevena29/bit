class Thing{
    constructor(name,avatar_url){
        this.name=name;
        avatar_url=avatar_url;
    }
    get name(){
        return this.name;
    }
    get avatar_url(){
        return this.avatar_url;
    }
    getData(){
        return ` name:${this.name} avatar:${this.avatar_url}`;
    }
}
export default Thing;