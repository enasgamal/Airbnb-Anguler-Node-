import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() icon:string
@Input() img:string
@Input() title:string
@Input() description:string
  constructor() { }

  ngOnInit(): void {
  }

}
