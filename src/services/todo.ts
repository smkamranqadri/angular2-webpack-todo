import { Injectable } from '@angular/core';

export interface ITodo {
  id: number,
  task: string,
  completed: boolean
}

let SampleTodos: Array<ITodo> = [
  { id: 0, task: 'Task 1', completed: false },
  { id: 1, task: 'Task 2', completed: true },
  { id: 2, task: 'Task 3', completed: false },
]

@Injectable()
export class TodoService {

  lastId: number = 2;  
  todos: Array<ITodo> = SampleTodos;

  constructor() {}

  add(task: string) {
    this.todos.push({
      id: ++this.lastId,
      task: task,
      completed: false
    })
  }
  
  toggle(id: number) {
    for (var index = 0; index <= this.todos.length; index++) {
      if (this.todos[index].id === id) {
        this.todos[index].completed = !this.todos[index].completed;
        break;
      }
    }
  }

  remove(id: number) {
    for (var index = 0; index <= this.todos.length; index++) {
      if (this.todos[index].id === id) {
        this.todos.splice(index, 1);
        break;
      }
    }
  }

}