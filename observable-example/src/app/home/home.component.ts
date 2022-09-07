import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubcription: Subscription = new Subscription;

  constructor() { }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');

    this.firstObsSubcription.unsubscribe();
  }

  ngOnInit(): void {
    this.firstObsSubcription = interval(1000).subscribe(count => {
      console.log(count);
    })
  }

}
