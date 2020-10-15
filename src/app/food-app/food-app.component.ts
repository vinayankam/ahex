import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-food-app',
  templateUrl: './food-app.component.html',
  styleUrls: ['./food-app.component.css']
})
export class FoodAppComponent implements OnInit {
  view:boolean = false;
  myRestaurent: any;
  restarentImg: any;
  center: any = {
    lat:  17.3596 ,
    lng:  78.0889,
  }//google.maps.LatLngLiteral
  markers:any = []; 
  restarens: any = [{name:"vamshi international",image:"../../assets/images/vamshiHotal.jpg",position:[{lat:17.222,lng:17.4444}]},
                    {name:"nikilsai international",image:"../../assets/images/nikilSaiHotel.jpg"},
                    {name:"Hotal paradise",image:"../../assets/images/paradiceHotel.jpg"},
                    {name:"Hot cups",image:"../../assets/images/hotel.jpg"},
                    {name:"Food valley",image:"../../assets/images/vamshiHotal.jpg"},
                    {name:"sairam international",image:"../../assets/images/sairamHotel.jpg"}
                  ];
   
  constructor( ) { }

  ngOnInit(): void {
  navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: 17.3596,
        lng:78.0889,
      }
    })
    this.addMarker()
  }
  openview(a) {
    this.myRestaurent = a.name;
    this.restarentImg = a.image;
    this.view = true;
  }
  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    })
  }             
}
