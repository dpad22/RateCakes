import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  showAll(){
    return this._http.get('/api/cakes')
  }

  create(newCake: {baker: String, image: String}){
    return this._http.post('/api/cakes', newCake)
  }

  rate(addRating, cakeId){
    return this._http.post(`/api/rating/${cakeId}`, addRating);
  }


}
