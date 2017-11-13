
    import RepoThings from "./reposThings";
    import UserThings from "./userThings";
    
    const repoThings = new RepoThings();
    const userThings = new UserThings();
    
    
    let thingsService = userThings;
   
    
    thingsService.getThings((things) => {
        things.forEach((thing) => {
            console.log(thing.getData());
        });
    });