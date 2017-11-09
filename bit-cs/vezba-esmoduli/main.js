import getRepoThings from "./repositoryThings.js";

const repoThings = new getRepoThings();

let thingservice = repoThings;

thingservice.getThings((things) => {
    things.forEach((thing) => {

        console.log(thing.printThings());
    });
});