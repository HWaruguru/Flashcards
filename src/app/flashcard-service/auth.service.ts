import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private baseURL = "https://covidstats19.herokuapp.com"

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  
  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  registerUser(name: string, email: string, password: string) {
    const url = `${this.baseURL}/user`
    let promise = new Promise((resolve, reject) => {
      this.http
      .post<any>(url, {name, email, password})
      .toPromise()
      .then(
        res => {
          resolve({registered: true});
        },
        error => {
          reject(error)
        })
    })
    return promise
  }

  login(email: string, password: string) {
    const url = `${this.baseURL}/login`
    let promise = new Promise((resolve, reject) => {
      this.http
      .post<any>(url, {email, password})
      .toPromise()
      .then(
        res => {
          localStorage.setItem('currentUser', JSON.stringify(res));
          this.currentUserSubject.next(res);
          resolve({authenticated: true, user: res.user});
        },
        error => {
          resolve(error.error.message)
        })
    })
    return promise
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}