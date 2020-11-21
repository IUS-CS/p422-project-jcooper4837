import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GameDataService } from '../game-data.service';
import { LevelDataService } from '../level-data.service';
import { ScoreDataService } from '../score-data.service';
import { Score } from '../models/score';
import {Observable} from 'rxjs';
import {switchMap, map} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  selectedGameName: string;
  selectedLevelName: string;
  selectedScores: Observable<Score[]>;
  scores: Score[];

  constructor(
    private scoreDataService: ScoreDataService,
    private levelDataService: LevelDataService,
    private gameDataService: GameDataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.selectedScores = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Score[]> => {
        this.selectedGameName = params.get('game');
        this.selectedLevelName = params.get('level');
        return this.scoreDataService.getAllScores(params.get('game'), params.get('level'));
      })
    );
    this.selectedScores.subscribe(r => {
      r.sort((a, b) => b.score - a.score)
      this.scores = r;
    })
  }

  /*public selectLevel(name: string): void {
    this.selectedScores = this.scoreDataService.getAllScores(this.selectedGameName, this.selectedLevelName);
    console.log(this.selectedGameName, this.selectedLevelName);
    //this.selectedScores = this.selectedScores.sort((a, b) => b.score - a.score);
  }*/

}
