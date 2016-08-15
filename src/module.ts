import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoot } from './component/app';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppRoot],
  bootstrap: [AppRoot]
})
export class AppModule { }