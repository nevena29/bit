var observer = function (name) {
    var myName = name;

    var notify = function (msg) {
        console.log(myName + ": Desilo se! - " + msg);
    }

    return {
        notify: notify
    }
}

var subject = function () {
    var observers = [];
    var addObserver = function (observer) {
        observers.push(observer);
    }
    var notifyAll = function (msg) {
        for (var i = 0; i < observers.length; i++) {
            observers[i].notify(msg);
        }
    }
    var check = function () {
        for (var i = 0; i < 100; i++) {
            if (i % 11 === 0) {
                notifyAll(i);
            }
        }
    }
    return {
        addObserver:addObserver,
        notifyAll:notifyAll,
        check:check
    }
}
var s1= subject();
var obs1=observer("lampica1");
var obs2=observer("lampica2");
s1.addObserver(obs1);
s1.addObserver(obs2);
s1.check();
