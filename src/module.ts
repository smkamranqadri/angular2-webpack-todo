import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoot } from './component/app';
import { TodosComponent } from './component/todos';
import { TodoComponent } from './component/todo';
import { TodoService } from './services';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppRoot, TodosComponent, TodoComponent],
  providers: [TodoService],
  bootstrap: [AppRoot]
})
export class AppModule { }