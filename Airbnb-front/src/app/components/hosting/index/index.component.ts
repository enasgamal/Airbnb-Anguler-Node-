import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HostService } from 'src/app/services/host.service';
import { ApiResponse } from './../../models/ApiResponse';
import{Host} from '../../models/host'
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  form:FormGroup;
  isVisible:boolean=false;
  image:null;
  url:any;
  ID:number;
  hosts:Host[]=[]
  constructor(private _formBuilder:FormBuilder , private _hostService:HostService ,private _router:Router) { }
about=[
  {h4:"Why host on Airbnb?",p:"No matter what kind of home or room you have to share, Airbnb makes it simple and secure to host travelers. You’re in full control of your availability, prices, house rules, and how you interact with guests."},
  {h4:"We have your back",p:"To keep you, your home, and your belongings safe, we cover every booking with $1M USD in property damage protection and another $1M USD in insurance against accidents."}
];
steps=[
  {icon:"far fa-check-circle",h4:"List your space for free",p:"Share any space without sign-up charges, from a shared living room to a second home and everything in-between."},
  {icon:"far fa-check-circle",h4:"Decide how you want to host",p:"Choose your own schedule, prices, and requirements for guests. We’re there to help along the way."},
  {icon:"far fa-check-circle",h4:"Welcome your first guest",p:"Once your listing is live, qualified guests can reach out. You can message them with any questions before their stay."},
];
works=[
  {img:"/assets/images/36.jpg", h4:"Choose your requirements",p:"Decide how many people can stay and for how long. Set house rules that guests must follow when staying at your place."},
  {img:"/assets/images/37.jpg",h4:"Decide when to host",p:"Block off dates on your calendar whenever you like—there’s no minimum time that your place needs to be available."},
  {img:"/assets/images/38.jpg",h4:"Set your own prices",p:"What you charge is up to you. Our tools and insights can help you set nightly prices that are competitive for your area."},
  {img:"/assets/images/39.jpg",h4:"Help guests feel welcome",p:"Follow our amenity and performance guidelines to create comfortable stays and earn great reviews."}
];
safety=[
  {icon:"fas fa-laptop-house",h4:"Host insurance and protection",p:"To support you in the rare event of an incident, each booking on Airbnb includes property damage protection of up to $1M USD and liability insurance of up to $1M USD."},
  {icon:"fas fa-pump-soap",h4:"COVID-19 safety guidance and support",p:"To help protect the health of our community, we’ve partnered with experts to create safety practices for everyone, plus a cleaning process for hosts."},
  {icon:"fas fa-user-check",h4:"Requirements for all guests",p:"To give hosts peace of mind, we offer guest identification and let you check out reviews of guests before they book. Our new Guest Standards Policy sets higher expectations for behavior."},
];
  ngOnInit(): void {
    this.form=this._formBuilder.group({
      address:['',[Validators.required]],
      propertyType:['',[Validators.required]],
      numberOfGuests:['',[Validators.required]],
      numberOfBedrooms:['',[Validators.required]],
      numberOfBathrooms:['',[Validators.required]],
      totalPrice:['',[Validators.required]],
     
      description:['',[Validators.required,Validators.minLength(30)]],
      // startDate:['',[Validators.required]],
      // endDate:['',[Validators.required]],
      activities:[''],
      hostImage:[''],
      // hostStatus:[''],
      // hostID:[]
    })
    
  }
addHost(){
  let host:Host=new Host();
  host=this.form.value;
  console.log(host);
  this._hostService.addHost(host).subscribe(res=>{
    host.hostID=(res as ApiResponse).data.hostID
    this.ID=host.hostID
    console.log((res as ApiResponse).success)
    if((res as ApiResponse).success==true){
      // this._router.navigateByUrl('/hosting/listing')
      this.isVisible=true
      if(this.isVisible){
        this._hostService.getHostById(host.hostID).subscribe(res=>{
          let currentHost=(res as ApiResponse).data;
          this.hosts.push(currentHost)
          console.log(res , "hosts Array", this.hosts)
        })
      }
    }

  })
}
selectImage(event:any) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    const file=event.target.files[0];
    // this.form.get('userImage').setValue(file);
    this.image=file
    reader.readAsDataURL(event.target.files[0]);
    console.log(file)
    reader.onload = (event: ProgressEvent) => {
      this.url = (<FileReader>event.target).result;
    }
  }

}
start(){
  const formData=new FormData();
  formData.append('hostImage',this.image);
  this._hostService.uploadImage(this.ID,formData).subscribe(res=>{
    console.log(res);
    if((res as ApiResponse).success==true){
      this._router.navigateByUrl('hosting/confirm')
    }
  })
  
}

}
