const tasks = ['Задача 1'];
const addTask = (newTaskName) => {
    tasks.push(newTaskName)
}

addTask('zadach 2')

console.log(tasks);

const deleteTask = (taskName) => {
    let myInd = tasks.indexOf(taskName)
    if (myInd !== -1) {
        tasks.splice(myInd,1)
    }
}

deleteTask('Задача 1');

console.log(tasks);

addTask('Задача 777')


console.log('***',tasks);

// ['zadach 2', 'Задача 777']
const transTask = (taskName) => {
    deleteTask(taskName)
    tasks.unshift(taskName)
}

transTask('Задача 777')


console.log(tasks);
