var task = require('./task');
var repoFactory = require('./repoFactory');

var task1 = new task(repoFactory.getRepo('task').get(1));
var task2 = new task(repoFactory.getRepo('task').get(1));


var user = repoFactory.getRepo('user').get(1);
var project = repoFactory.getRepo('project').get(1);

task1.user = user;
task1.project = project;

//task1.complete();
task2.save();


