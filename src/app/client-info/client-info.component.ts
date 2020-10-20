import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

  result:string = "";
  price:number = 0;
  numOfTravelers:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculatePrice(n:number): void{
    this.numOfTravelers = n;
    this.price = n * 150;
    this.result = "The total cost is $" + this.price;
    console.log('caculate function called'+ this.numOfTravelers);
  }

}
