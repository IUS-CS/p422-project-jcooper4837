import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Game } from './models/game';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  /*private games: Game[] = [{
    name: 'Game-1',
    platforms: [
      'Xbox-One',
      'Playstation-4',
      'Switch',
      'PC',
    ],
    release: "2020-10-31"
  }]*/

  constructor(
    private http: HttpClient
  ) { }

  private url = '/v1';

  public getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.url}/games`);
  }
}
