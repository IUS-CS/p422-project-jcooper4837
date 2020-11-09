import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameDataService } from '../game-data.service';
import { Level, LevelDataService } from '../level-data.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {
  selectedGameName: string;
  selectedGame: Level[];

  constructor(
    private levelDataService: LevelDataService,
    private gameDataService: GameDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectGame('Game-1');
  }

  public selectGame(name: string): void {
    this.selectedGameName = this.gameDataService.getGame(name).name;
    this.selectedGame = this.levelDataService.getAllLevels(this.selectedGameName);
    this.selectedGame = this.selectedGame.sort();
  }

}
