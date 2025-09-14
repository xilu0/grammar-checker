import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GrammarPoint } from '../models/grammar.models';

@Injectable({
  providedIn: 'root'
})
export class GrammarDataService {

  constructor(private http: HttpClient) { }

  getGrammarPoints(): Observable<GrammarPoint[]> {
    return this.http.get<GrammarPoint[]>('/assets/grammar.json');
  }
}
