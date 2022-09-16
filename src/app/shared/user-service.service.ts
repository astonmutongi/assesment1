import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) { }

  list(): Observable<any> {
    var url = 'user';
    const requestUrl = `${this.getBaseUrl()}${url}/`; 
    return this.http
        .get<User>(requestUrl, {
            observe: 'response'
            
        });
  }

  save(user: User): Observable<any> {  
    
      var url = 'user';

      const requestUrl = `${this.getBaseUrl()}${url}`;
      return this.http
          .post(requestUrl, user, {
              observe: 'response',
          }); 
  }

  delete(user: User): Observable<any> {
    var url = 'user/delete' 
    const requestUrl = `${this.getBaseUrl()}${url}`;
    return this.http.post(requestUrl,user ,{
        observe: 'response',
    });
  }

  getSingle(id: string): Observable<any> {
    var url = 'user/getsingle?Id=' + id
    const requestUrl = `${this.getBaseUrl()}${url}`;
    return this.http.get(requestUrl, {
        observe: 'response',
    });
  }
  getBaseUrl(): string {
    return environment.apiUrl;
  }

}
