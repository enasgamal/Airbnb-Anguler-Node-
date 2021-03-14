import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() img:string;
  @Input() description:string;
  @Input() title:string;
  constructor() { }

  ngOnInit(): void {
  }

}
