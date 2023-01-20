
const Task =  require('./task');

class Tasks {

    _listTask = {};

    get getTasks() 
    {
        return Object.keys(this._listTask).map( _idTask => this._listTask[_idTask]) 
    }

    constructor() {
        this._listTask = {};
    }

 
    createTask = desc => {
        const task = new Task(desc);
        this._listTask[task.id] = task;
    }

}

module.exports = Tasks;