import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
host=[
  {icon:"fas fa-home", h4:"Host from home",p:"Share your expertise and a window to your world."},
  {icon:"fas fa-globe",h4:"Meet global guests",p:"Make the world feel a little smaller and a lot friendlier."},
  {icon:"fas fa-fire-alt",h4:"Build a business",p:"Earn money doing something you love with support from Airbnb."}
]
works=[
  {img:"/assets/images/33.jpg", h4:"Meditate with Sheep",p:"Mindfulness straight from a Scottish farm, accompanied by encounters with some fuzzy friends."},
  {img:"/assets/images/34.jpg",h4:"Family Baking Fun",p:"A good time in the kitchen for kids and grown-ups alike that ends with a batch of freshly baked cookies."},
  {img:"/assets/images/35.jpg",h4:"Secrets of Magic",p:"Part show and part masterclass, guests learn magic psychology and tricks they can do at home."}
]
  constructor() { }

  ngOnInit(): void {
  }
 
}
