import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rate my Cakes!';
  cakes = [];
  newcake: any;
  newRating: any;
 

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getCakeFromService();
    this.newcake = {baker:"",image:""};
    this.newRating = {rating:null,comment:""};

  }

  getCakeFromService(){
    let observable = this._httpService.showAll();
    observable.subscribe(data => {
      this.cakes = data['cake']
    });
  }


  

}
