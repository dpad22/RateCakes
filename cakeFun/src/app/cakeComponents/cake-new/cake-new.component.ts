import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cake-new',
  templateUrl: './cake-new.component.html',
  styleUrls: ['./cake-new.component.scss']
})
export class CakeNewComponent implements OnInit {
  newCake:{baker:String, image:String}
  constructor(private _httpService: HttpService, private _router:Router) {
    this.newCake = {baker:"", image:""}
  }

  ngOnInit() {
  }

  create(){

    this._httpService.create(this.newCake).subscribe(data => {
      // @ts-ignore
      if(data._id){
        this._router.navigate(['/cakes'])
      }
    })
  }

}
