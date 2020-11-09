import { Injectable } from '@angular/core';

export class Game {
  name: string;
  platforms: string[];
  release: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  private games: Game[] = [{
    name: 'Game-1',
    platforms: [
      'Xbox-One',
      'Playstation-4',
      'Switch',
      'PC',
    ],
    release: "2020-10-31"
  }]

  constructor() { }

  public getGame(name: string): Game {
    let res = this.games.find(c => c.name.toLowerCase() === name.toLowerCase());
    return res;
  }

  public getAllGames(): Game[] {
    let res = this.games;
    return res;
  }
}
