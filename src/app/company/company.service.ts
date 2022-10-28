import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { catchError } from 'rxjs/operators';
import {Company} from "./company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiURL = environment.apiBase;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiURL + 'company')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(company: Company): Observable<any> {
    return this.http.post(this.apiURL + '/company/', JSON.stringify(company), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: string, company: Company): Observable<any> {
    return this.http.put(this.apiURL + '/company/' + id, JSON.stringify(company), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: string){
    return this.http.delete(this.apiURL + '/company/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
