import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Flashcard } from '../flashcard';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  addFlash(title: string, notes: string, subject: string, dateCreated: Date, dateUpdated: Date): any {
    throw new Error('Method not implemented.');
  }
  addPost(country: string, tests: string, cases: string, recovered: string, deaths: string, date_created: Date): any {
    throw new Error('Method not implemented.');
  }
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

  deleteFlashCard(flashcard_id: number): Promise<Flashcard> {
    const url = `${this.baseURL}/post/${flashcard_id}`;
    let promise = new Promise<Flashcard>((resolve, reject) => {
      this.http
      .delete<any>(url, ({headers: new HttpHeaders({ "x-access-token": `${this.currentUserValue.token}`})}))
      .toPromise()
      .then(
        res => {
          resolve(res);
        },
        error => {
          reject(error.error.message)
        })
    })
    return promise
  }
  updateFlashCard(flashcard_id: number): Promise<Flashcard> {
    const url = `${this.baseURL}/post/${flashcard_id}`;
    let promise = new Promise<Flashcard>((resolve, reject) => {
      this.http
      .delete<any>(url, ({headers: new HttpHeaders({ "x-access-token": `${this.currentUserValue.token}`})}))
      .toPromise()
      .then(
        res => {
          resolve(res);
        },
        error => {
          reject(error.error.message)
        })
    })
    return promise
  }
}