
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

    loadTasks = tasks => {
        for(let i = 0; i < tasks.length; ++i)  this._listTask[tasks[i].id] = tasks[i]
    }

 
    createTask = desc => {
        const task = new Task(desc);
        this._listTask[task.id] = task;
    }

    deleteTask = id => {
        if( this._listTask[id] ) delete this._listTask[id];
    }

    allList = () => {
        console.log();
        Object.keys(this._listTask).forEach( (task, index) => {
            console.log(`${ (index + 1).toString().green } ${this._listTask[task].desc} :: ${this._listTask[task].completedIn ? 'Completada'.green : 'Pendiente'.red }`)
        })
    }

    listPendingCompleted = completed => {

        if(completed) {
            console.log();
            let index = 1;
            Object.keys(this._listTask).forEach( (task) => {
                if(this._listTask[task].completedIn)
                {
                    console.log(`${ (index).toString().green }. ${this._listTask[task].desc} :: ${this._listTask[task].completedIn.green}`);
                    ++index;
                }
            })   
        }

        else {
            console.log();
            let index = 1;
            Object.keys(this._listTask).forEach( (task) => {
                if(!this._listTask[task].completedIn)
                {
                    console.log(`${ (index).toString().green }. ${this._listTask[task].desc} :: ${'Pendiente'.red}`)
                    ++index;
                } 
            })
        }
    }

    toggleCompleted = ids => {

        ids.forEach( id => {
            const task = this._listTask[id];
            if(!task.completedIn) task.completedIn = new Date().toISOString();
        })

        
    }

}

module.exports = Tasks;