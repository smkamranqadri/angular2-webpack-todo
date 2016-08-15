import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'body',
  template: require('./app.html'),
  styles: [require('./app.scss')],
  host: {
    style: 'margin: 0px;',
  },
  encapsulation: ViewEncapsulation.Native
})
export class AppRoot {
  constructor() {}
} 