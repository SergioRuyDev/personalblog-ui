import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterPayload } from './auth/register/register-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  register(registerPayLoad: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url + "signup", registerPayLoad);
  }
}
