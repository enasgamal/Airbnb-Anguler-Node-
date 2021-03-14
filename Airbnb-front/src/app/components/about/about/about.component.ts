import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
places=[
  {img:'/assets/images/22.jpg',
  h2:"A place to stay for every trip",
  p:"Whether you’re looking for a treehouse for the weekend or an entire home for the whole family,a warm welcome awaits. Behind every stay is a real person who can give you the details you need to check in and feel at home."
  },
  {img:'/assets/images/23.jpg',
  h2:"One-of-a-kind experiences",
  p:"Airbnb Experiences are not your typical tour. Whether you’re on a trip, exploring your own city, or staying at home, learn something new from an expert host. Choose from dance lessons, pasta-making—even yoga with goats."
  }
];
steps=[
  {img:'/assets/images/24.jpg',
  h4:"Filter down to your perfect fit",
  p:"Personalize your search with filters—like price range or a pool—to get exactly what you want."
},

  {img:'/assets/images/25.jpg',
  h4:"Dig into the details",
  p:"Check out the photos. Then, read guest reviews from past reservations to learn what it’s like in person."
},

  {img:'/assets/images/26.jpg',
  h4:"Book with peace of mind",
  p:"We keep your info safe and follow global security standards to process your payments."
},

  {img:'/assets/images/27.jpg',
  h4:"Arrive and enjoy!",
  p:"Your host is only a message away if you have any questions. They can also offer local tips and advice.",
}
];
airbnb=[
  {
    icon:'fas fa-globe',
    h4:"A global travel community",
    p:"Airbnb is available in 191+ countries, and our Community Standards help promote safety and belonging for everyone.",
  },
  {
    icon:'fas fa-hand-holding-heart',
    h4:"Hosts who truly care",
    p:"From homes to hotels, hosts are all about the things that make you feel welcome wherever you go."
  },
  {
    icon:'fas fa-user-shield',
    h4:"We’re here for you—day or night",
    p:"Our 24/7 global support is available in 11 different languages and ready to help wherever you are."
},
  {
    icon:'fas fa-suitcase',
    h4:"Every trip is covered by Airbnb",
    p:"The Guest Refund Policy covers many travel issues, and we’ll rebook or refund you if any of them come up."
 }
]
  constructor() { }

  ngOnInit(): void {
  }

}
