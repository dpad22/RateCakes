import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.scss']
})
export class CakelistComponent implements OnInit {
  cake = "";
  cakes:Array<{baker:string,image:string}>;
  addRating:any;
  wasClicked = false;
  selectedCake: any;
  avg: any;
  constructor(private _httpService: HttpService) { 
    this.cakes = []
  }

  ngOnInit() {
    this.addRating = {stars: 1,comment:""}
    this.getCakes()
  }

  getCakes(){
    this.cakes = []
    this._httpService.showAll().subscribe(data => {
      // @ts-ignore
      for(let cake of data){
        // @ts-ignore
        cake.addRating = {stars: 1,comment:""}
        this.cakes.push(cake)
      }
    })
  }

  displayCake(cake){
    console.log(this.cake)
    this.selectedCake = cake;
    this.wasClicked = true;
    var sum = 0;
    for(var i=0; i< this.selectedCake.ratings.length;i++){
      sum += this.selectedCake.ratings[i].stars;
    }
    this.avg = (sum / this.selectedCake.ratings.length).toFixed(2);

    console.log(cake)
    console.log(sum)
    console.log(this.avg)

  }

  getCakeFromService(){
    let observable = this._httpService.showAll();
    observable.subscribe(data => {
      
      // this.cakes = data['cake']
    });
  }

  rate(cake){
    console.log(cake._id);
    let observable = this._httpService.rate(cake.addRating,cake._id);
    observable.subscribe(data => {
      this.getCakes()
    })
  }
  
}
