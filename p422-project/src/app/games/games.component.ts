import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game, GameDataService } from '../game-data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  gameList: Game[];

  constructor(
    private gameDataService: GameDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  public getList(): void {
    this.gameList = this.gameDataService.getAllGames();
  }

}
