import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from "../models/Entries";

@Injectable({
  providedIn: 'root',
})
export class EntriesService {
  url = 'https://api.publicapis.org/entries?category=games';
  constructor(private http: HttpClient) {}

  getEntries(): Observable<Response> {
    return this.http.get<Response>(this.url);
  }
}
