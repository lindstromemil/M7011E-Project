import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Token, User} from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn:'root'
})
export class UserService {

    constructor(
        private http: HttpClient,
        private cookieService: CookieService
    ) {

    }

    create_user(username: string, password: string): Observable<Token> {
        const body = {
          "image_path": "----",
          "description": "nice kille",
          "username": username,
          "password": password
        };
        return this.http.post<Token>(environment.baseUrl+"/users", body);
    }

    login_user(username: string, password: string): Observable<Token> {
      return this.http.get<Token>(environment.baseUrl+"/users/login/"+username+":"+password);
    }

    get_me(): Observable<User> {
      const header: {Authorization: string} = { 'Authorization': `Bearer ${this.cookieService.get('token')}` }

      return this.http.get<User>(environment.baseUrl+"/users/me", { headers: header });
    }

    update_password(newPass: string, userId: string): Observable<string> {
      const header: {Authorization: string} = { 'Authorization': `Bearer ${this.cookieService.get('token')}` }
      const body = {
      'password': `${newPass}`
      };
      return this.http.patch<string>(environment.baseUrl+"/users/"+userId, body, { headers: header });
    }

    delete_user(username: string): Observable<string> {
      const header: {Authorization: string} = { 'Authorization': `Bearer ${this.cookieService.get('token')}` }
      return this.http.delete<string>(environment.baseUrl+"/users/"+username, { headers: header });
    }
  }
