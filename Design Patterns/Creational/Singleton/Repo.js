var repo = function () {
    var called = 0;
    var save  = function (task){
        called++;
        console.log('Saving', task, called);
    }
    console.log('Newing up task repo');
    return{
        save: save
    }
}

module.exports = repo;