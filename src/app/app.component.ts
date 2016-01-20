import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
  selector: 'app',
  templateUrl: './templates/index.html'
})

export class AppComponent {

  images:Array<Object> = [];

  constructor() {}

  handleDrop(e) {
  }

  imageStats() {
    
  }
}