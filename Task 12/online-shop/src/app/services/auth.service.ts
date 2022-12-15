import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  login(loginData: any) {
    return this.httpClient.post(`${environment.apiUrl}users/login`, loginData);
  }

  register(data: any) {
    return this.httpClient.post(`${environment.apiUrl}users/register`, data);
  }

  sendCheckOut(data: any){
    const headers = {'x-access-token': JSON.parse(localStorage.getItem('loginData') || '').token}
    return this.httpClient.post(`${environment.apiUrl}orders/`, data, {headers})
  }


  saveLoginData(loginData: any) {
    localStorage.setItem('loginData', JSON.stringify(loginData));
  }

  getLoginData() {
    return JSON.parse(localStorage.getItem('loginData') || '{}');
  }

  getIsAuthenticated(): boolean {
    return this.getToken() != null;
  }

  getToken() {
    return this.getLoginData()?.token;
  }

  getName() {
    return `${this.getLoginData()?.first_name} ${
      this.getLoginData()?.last_name
    }`;
  }

  signOut() {
    localStorage.removeItem('loginData');
    this.router.navigate(['/home']);
  }
}
