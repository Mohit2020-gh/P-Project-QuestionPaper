import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from './test';

//Services Hit the API for Request and Response

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _http:HttpClient) { }

  GetQuestion()
  {
    //get will always return a obserable object so we have to specify that we want are storing this in array
    return this._http.get<Test[]>("http://localhost:5248/api/Questionpaper") 

  }
}
