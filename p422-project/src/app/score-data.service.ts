import { Injectable } from '@angular/core';
import { Level } from './models/level';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Score } from './models/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreDataService {
  /*private scores: Score[] = [{
    level: 'Level-1',
    user: 'username',
    score: 1000,
    date: '2020-11-09',
    proof: 'Video',
    comment: 'this score is last place lol',
  },
  {
    level: 'Level-1',
    user: 'highscoreguy',
    score: 5000,
    date: '2005-06-12',
    proof: 'Picture',
    comment: '',
  },
  {
    level: 'Level-1',
    user: 'i_dont_cheat',
    score: 1000000,
    date: '2001-09-14',
    proof: 'None',
    comment: 'completely legit did it in my sleep',
  },
  {
    level: 'Level-1',
    user: 'ultimate_gamer',
    score: 25000,
    date: '2017-07-07',
    proof: 'Live Video',
    comment: 'bad will improve later',
  }];*/

  constructor(
    private http: HttpClient
  ) { }

  private url = '/v1';

  public getAllScores(game: string, level: string): Observable<Score[]> {
    return this.http.get<Score[]>(`${this.url}/${game}/${level}`);
  }

  public saveSubmission(game: string, level: string, submission: Score): Observable<any> {
    return this.http.post(`${this.url}/${game}/${level}`, submission);
  }
}
