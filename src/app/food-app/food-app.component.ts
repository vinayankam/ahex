import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-food-app',
  templateUrl: './food-app.component.html',
  styleUrls: ['./food-app.component.css']
})
export class FoodAppComponent implements OnInit {
  view:boolean = false;
  myRestaurant: string;
  restaurantImg: string;
  center: object = {
    lat:  17.3596 ,
    lng:  78.0889,
  }
  markers:any = []; 
  zoom: number = 7;
  restaurants: any = [{name:"vamshi international",image:"../../assets/images/vamshiHotal.jpg",position:{lat:17.40830463,lng:78.4588623}},
                    {name:"nikilsai international",image:"../../assets/images/nikilSaiHotel.jpg",position:{lat:16.70986293,lng:78.11828613}},
                    {name:"Hotal paradise",image:"../../assets/images/paradiceHotel.jpg",position:{lat:17.96305758,lng:79.5300293}},
                    {name:"Hot cups",image:"../../assets/images/hotel.jpg",position:{lat:18.38580493,lng:77.623901374}},
                    {name:"Food valley",image:"../../assets/images/vamshiHotal.jpg",position:{lat:17.05678461,lng:79.26635742}},
                    {name:"sairam international",image:"../../assets/images/sairamHotel.jpg",position:{lat:18.729502,lng:78.10180664}}
                  ];
   
  constructor( ) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: 17.3596,
        lng:78.0889,
      }
    })
  }

  // view the restaurant
  openview(restaurant) {
    this.myRestaurant = restaurant.name;
    this.restaurantImg = restaurant.image;
    this.markers = []
    this.view = true;
    this.markers.push({
      position: {
        lat: restaurant.position.lat + ((Math.random() - 0.5) * 2) / 10,
        lng:restaurant.position.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'pink',
        text: this.myRestaurant,
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    })
  }            
}
