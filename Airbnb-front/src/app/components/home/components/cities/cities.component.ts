import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  @Input() img:string;
  @Input() city:string;
  @Input() time:string;
  @Input() link:string
  constructor() { }

  ngOnInit(): void {
  }

}
