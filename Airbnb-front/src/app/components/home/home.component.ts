import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // cities section
cities=[
  {img:"/assets/images/2.webp",h5:"Hurghada",p:"5.5 hour drive",link:"/places/city/Hurghada"},
  {img:"/assets/images/3.jpg",h5:"North Coast",p:"2 hour drive" ,link:"/places/city/North coast"},
  {img:"/assets/images/4.jpg",h5:"Sharm el-shekih",p:"7 hour drive",link:"/places/city/Sharm el-shekih"},
  {img:"/assets/images/5.jpg",h5:"Matrouh",p:"6 hour drive",link:"/places/city/Matrouh"},
  {img:"/assets/images/6.jpg",h5:"Alex",p:"2.5 hour drive",link:"/places/city/Alex"},
  {img:"/assets/images/7.jpg",h5:"Dahab",p:"6.5 hour drive",link:"/places/city/Dahab"},
  {img:"/assets/images/8.jpg",h5:"Ras Sedr",p:"5 hour drive",link:"/places/city/Ras Sedr"},
  {img:"/assets/images/10.jpg",h5:"El-Alamein",p:"4.5 hour drive",link:"/places/city/El-Alamein"},
];
//section live
places=[
  {img:"/assets/images/11.jpg",desc:"Entire homes",router:"/places/propertyType/Apartment"},
  {img:"/assets/images/12.jpg",desc:"Cabines and cottage",router:"/places/propertyType/Cabines and Cottage"},
  {img:"/assets/images/13.jpg",desc:"unique stays",router:"/places/propertyType/Unique Stays"},
];
//section explore
explore=[
  {img:"/assets/images/15.jpg",title:"Online Expreience",desc:"Travel the world without leaving home.",router:"/online-experience/allOnlineExperience"},
  {img:"/assets/images/16.jpg",title:"Places",desc:"Reserve your place now!.",router:"/places"},
  {img:"/assets/images/17.jpg",title:"Experiences",desc:"Multi-day trips with meals and stays.",router:"/experience/allExperience"},
];
//section host
host=[
  {img:"/assets/images/18.jpg",desc:"Host you home",router:"/hosting"},
  {img:"/assets/images/19.jpg",desc:"Host an Experience",router:"/experience"},
  {img:"/assets/images/100.jpg",desc:"Host an online experience",router:"/online-experience/addOnlineExperience"},
]
  constructor() { }
 

  ngOnInit(): void {
  }

}
