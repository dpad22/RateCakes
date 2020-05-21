import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-cake-info',
  templateUrl: './cake-info.component.html',
  styleUrls: ['./cake-info.component.scss']
})
export class CakeInfoComponent implements OnInit {
  @Input() cakesToShow: any;
  @Input() avg: any;
  title = "Baked by";
  cake = "";
  cakes: any =[];
  wasClicked = false;


  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    console.log("info Component called")
  }

  displayCake(cake){
    this.cake = cake;
    this.wasClicked = true;
  }
}
