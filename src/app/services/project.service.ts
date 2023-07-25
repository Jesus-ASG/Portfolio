import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url: string = 'http://localhost:8080/api/v1/projects';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
