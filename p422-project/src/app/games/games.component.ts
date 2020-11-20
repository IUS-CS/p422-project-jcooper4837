import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GameDataService } from '../game-data.service';
import { Game } from '../models/game';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  selectedGames: Observable<Game[]>;

  constructor(
    private gameDataService: GameDataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.selectedGames = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Game[]> => {
        return this.gameDataService.getAllGames();
      })
    );
  }

  /*public getList(): void {
    this.gameList = this.gameDataService.getAllGames();
  }*/

}
