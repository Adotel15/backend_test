
const Task =  require('./task');

class Tasks {

    _listTask = {};

    constructor() {
        this._listTask = {};
    }

    createTask = desc => {
        const task = new Tasks(desc);
        this._listTask[task.id] = task;
    }

}

module.exports = Tasks;