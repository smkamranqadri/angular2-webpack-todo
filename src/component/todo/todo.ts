import { Component, Input } from '@angular/core';

import { TodoService, ITodo } from '../../services';

@Component({
  selector: 'todo',
  template: require('./todo.html'),
  styles: [require('./todo.scss')]
})
export class TodoComponent {

  @Input() todo: ITodo

  constructor(private ts: TodoService) {
    
  }

  toggle(id) {
    this.ts.toggle(id);
  }

  remove(id) {
    this.ts.remove(id);
  }

}