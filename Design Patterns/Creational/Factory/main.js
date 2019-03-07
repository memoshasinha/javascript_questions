var task = require('./task');

var Repo = require('./taskRepository');

var task1 = new task(Repo.get(1));
var task2 = new task({name:'Create task for modules pattern'});
var task3 = new task({name:'Create task for singleton pattern'});
var task4 = new task({name:'Create task for prototypes pattern'});

task1.complete();
task2.save();
task3.save();
task4.save();


