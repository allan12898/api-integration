import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICategory } from './icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  url: string = "https://localhost:5001/api/Categories";
  constructor(private http: HttpClient) { }
  getCategories(id = '') : Observable<any>{
    return this.http.get(this.url+`/${id}`).pipe(catchError(this.errorHandler))
    
  }
  postCategory(category : ICategory) {
    return this.http.post<ICategory>(this.url,category ).pipe(catchError(this.errorHandler))
  }

  putCategory(id : number,category: ICategory){
    return this.http.put(this.url+'/id',category).pipe(catchError(this.errorHandler))
  }
  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }


}
