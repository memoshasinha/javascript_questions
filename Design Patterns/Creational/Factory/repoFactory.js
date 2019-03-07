var repoFactory = function () {
    this.getRepo = function (repoType) {
        if (repoType === 'task'){
            var taskRepo = require('./taskRepository')();
            return taskRepo;
        }
        if (repoType === 'user'){
            var taskRepo = require('./userRepository')();
            return taskRepo;
        }
        if (repoType === 'project'){
            var taskRepo = require('./projectRepository')();
            return taskRepo;
        }
    }
};
module.exports = new repoFactory();
