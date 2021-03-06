import { FilmCard } from './../models/filmCard';
import { Observable, Subject } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class SharedService {


  private inputValueSubject = new Subject<FilmCard>();

  constructor(private httpClient: HttpClient) { }
  data: FilmCard;
  setvalue(inputValue) {
    this.inputValueSubject.next(inputValue);
  }

  getList(input) {

    const url = 'https://api.themoviedb.org/3/search/movie/?api_key=b6dba21fefcead3510c8ddf58eb57d43&query=' + input;
    return this.httpClient.get<FilmCard[]>(url);
  }
  getValue() {
    return this.inputValueSubject.asObservable();
  }
}
