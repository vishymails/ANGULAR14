import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tests-example';

  constructor() {
    console.log("constructor is called ");
  }

  ngAfterViewInit() {
    console.log("after initialization ");
  }


}
