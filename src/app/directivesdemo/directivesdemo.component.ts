import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivesdemo',
  templateUrl: './directivesdemo.component.html',
  styleUrls: ['./directivesdemo.component.css']
})
export class DirectivesdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showSecret = false;

  log : number[]= [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

}
