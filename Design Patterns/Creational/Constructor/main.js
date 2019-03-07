var task = require('./class');
var task1 = new task('Create task for constructor pattern');
var task2 = new task('Create task for modules pattern');
var task3 = new task('Create task for singleton pattern');
var task4 = new task('Create task for prototypes pattern');

task1.complete();
task2.save();
task3.save();
task4.save();


