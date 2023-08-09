import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perspective } from '../models/perspective.model';
import { Objective } from '../models/objective.model';
import { Comment } from '../models/comment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  private _baseUrl = environment.baseUrlApi


  getData() {
    return this.http.get(this._baseUrl)
  }



}
