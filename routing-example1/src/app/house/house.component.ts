import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToOffice(message : string) {
    this.router.navigate(['/office'], {queryParams : {message : message }});
  }
}
