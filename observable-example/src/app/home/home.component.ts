import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

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
    // this.firstObsSubcription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    const customIntervalObservable = Observable.create((observer: { next: (arg0: number) => void; complete: () => void; error: (arg0: Error) => void; }) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 5 ) {
          observer.complete();
        }
        if(count > 3) {
          observer.error(new Error('Count is greater than 3 '));
        }
        count++;

      }, 1000);
    });


    this.firstObsSubcription = customIntervalObservable.subscribe((data: any) => {
      console.log(data);
    }, (error: { message: any; }) => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log("completed");
    });
  }

}
