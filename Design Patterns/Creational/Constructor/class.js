'use strict';

class Task {
    constructor(name, completed){
    this.name = name;
    this.completed = false;
    }

    complete(){
        console.log('completing task ', Task.name);
        this.completed = true;
    };

    save(){
        console.log('Saving Task: ', this.name);
    };

}


module.exports = Task;