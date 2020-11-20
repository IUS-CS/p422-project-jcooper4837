import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GameDataService } from '../game-data.service';
import { LevelDataService } from '../level-data.service';
import { Level } from '../models/level';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {
  selectedGameName: string;
  selectedLevels: Observable<Level[]>;

  constructor(
    private levelDataService: LevelDataService,
    private gameDataService: GameDataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.selectedLevels = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Level[]> => {
        this.selectedGameName = params.get('game');
        return this.levelDataService.getAllLevels(params.get('game'));
      })
    );
  }

  /*public selectGame(name: string): void {
    this.selectedGameName = this.gameDataService.getGame(name).name;
    this.selectedLevels = this.levelDataService.getAllLevels(this.selectedGameName);
    this.selectedLevels = this.selectedGame.sort();
  }*/

}
