import { getSourceFileOrError } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Injectable } from '@angular/core';
import { Score, ScoreDataService } from './score-data.service';

export class Level {
  game: string;
  name: string;
  isScore: boolean;
  isAscending: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LevelDataService {
  private levels: Level[] = [{
    game: 'Game-1',
    name: 'Level-1',
    isScore: true,
    isAscending: true
  }]

  constructor() { }

  public getLevel(name: string): Level {
    let res = this.levels.find(c => c.name.toLowerCase() === name.toLowerCase());
    return res;
  }

  public getAllLevels(name: string): Level[] {
    let res = this.levels.filter(c => c.game.toLowerCase() === name.toLowerCase());
    return res;
  }
}
