import { Component } from '@angular/core';

import { TodoService, ITodo } from '../../services';

@Component({
  selector: 'todos',
  template: require('./todos.html'),
  styles: [require('./todos.scss')]
})
export class TodosComponent {

  todos: Array<ITodo>

  constructor(private ts: TodoService) {
    this.todos = this.ts.todos;
  }

  add(todo: string) {
    this.ts.add(todo);
  }

}