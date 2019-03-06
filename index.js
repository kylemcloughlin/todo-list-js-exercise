// Arrays to keep track of each task's state


// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskComplete.push(false);
//   taskDescritption.push(description)
// }



function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {

      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function () {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

console.log(tasks);





// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.complete = true;

}

// Print the state of a task to the console in a nice readable way

// logTaskState(task1)
task1.logState();
// completeTask(task1)
task1.markCompleted();
// logTaskState(task1)
task1.logState();

// DRIVER CODE BELOW
