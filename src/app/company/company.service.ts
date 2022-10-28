import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  api = environment.apiBase;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get(this.api + 'company')
      .pipe(
        catchError(this.errorHandler)
      )
    // return this.http
    //   .get<Array<CompanyItem>>(this.api + 'api/company')
    //   .pipe(map((result) => result.map((x) => new CompanyItem(x))))
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
