import { Injectable } from '@angular/core';
import { Details } from '../shared/details.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private _url: string = "http://localhost:51014/api/Self_service";
  selectedBboard: Details;
  constructor(private http: HttpClient) { }

  postBboard (data: Details): Observable<Details> {
    var body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<Details>(this._url, body, httpOptions);
  }
}
