import { getSourceFileOrError } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Injectable } from '@angular/core';
import { ScoreDataService } from './score-data.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Level } from './models/level';

@Injectable({
  providedIn: 'root'
})
export class LevelDataService {
  /*private levels: Level[] = [{
    game: 'Game-1',
    name: 'Level-1',
    isScore: true,
    isAscending: true
  }]*/

  constructor(
    private http: HttpClient
  ) { }

  private url = '/v1';

  public getAllLevels(game: string): Observable<Level[]> {
    return this.http.get<Level[]>(`${this.url}/${game}`);
  }
}
