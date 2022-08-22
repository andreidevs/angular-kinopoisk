import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, debounceTime, distinctUntilChanged, Observable, retry, tap, throwError} from "rxjs";
import {IFilms} from "../models/films";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  apiUrl: string =''
  apikey: string = ''
  constructor(
    private http: HttpClient,
  ) {
    this.apiUrl = environment.apiUrl
    this.apikey = environment.apiKey
  }

  films: IFilms[] = [];
  loading: boolean = false

  getAll(page: number = 1, search: string,): Observable<IFilms[]> {
    return this.http.get<any>(this.apiUrl, {
      params: new HttpParams({
        fromObject: {
          apikey: this.apikey,
          type: 'movie',
          page: page,
          s: search,
        }
      })
    }).pipe(
      tap(films => {
        if(films.Search) {
          this.films = this.films.concat(films.Search)
        }
      }),
      catchError(this.errorHandler),
    )
  }

  clear(){
    this.films = []
  }


  private errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message)
  }
}
