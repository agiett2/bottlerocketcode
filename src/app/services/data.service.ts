import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reastuarants } from '../model/reasturants';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'src/app/data/data.json';
  constructor(private http: HttpClient) {}

   getData(): Observable<Reastuarants> {
     return this.http.get<Reastuarants>(`${this.dataUrl}`);
   }
}
