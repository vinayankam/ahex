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
  restarens: any = [{name:"vamshi international",image:"../../assets/images/hotel.jpg"},
                    {name:"nikilsai international",image:"../../assets/images/hotel.jpg"},
                    {name:"Hotal paradise",image:"../../assets/images/hotel.jpg"},
                    {name:"Hot cups",image:"../../assets/images/hotel.jpg"},
                    {name:"Food valley",image:"../../assets/images/hotel.jpg"},
                    {name:"sairam international",image:"../../assets/images/hotel.jpg"}
                  ];
                  
  constructor( ) { }

  ngOnInit(): void {
  
  }
  openview(a) {
    this.myRestaurent = a.name;
    this.restarentImg = a.image;
    this.view = true;
    // console.log(this.myRestaurent)
  }
}
