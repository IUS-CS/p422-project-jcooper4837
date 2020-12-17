import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GameDataService } from '../game-data.service';
import { LevelDataService } from '../level-data.service';
import { ScoreDataService } from '../score-data.service';
import { Score } from '../models/score';
import { Level } from '../models/level';
import { Game } from '../models/game';
import {Observable} from 'rxjs';
import {switchMap, map} from 'rxjs/operators';
import {Location} from '@angular/common';
import {FormControl, FormGroup, FormsModule, FormBuilder, Validators, ValidatorFn} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedUserName: string;
  selectedScores: Observable<Score[]>;
  selectedLevels: Observable<Level[]>;
  scores: Score[];
  levels: Level[];
  isScore: boolean[];

  constructor(
    private scoreDataService: ScoreDataService,
    private levelDataService: LevelDataService,
    private gameDataService: GameDataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.selectedLevels = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Level[]> => {
        return this.levelDataService.getFullLevels(params.get('user'));
      })
    );
    this.selectedScores = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Score[]> => {
        this.selectedUserName = params.get('user');
        return this.scoreDataService.getUserScores(params.get('user'));
      })
    );
    this.selectedLevels.subscribe(r => {
      this.levels = r;
      console.log(this.levels);
      this.selectedScores.subscribe(r => {
        this.scores = r;
        console.log(this.scores);
        this.getLevelStats();
      });
    });
  }

  public getLevelStats(): void {
    this.isScore = new Array<boolean>(this.scores.length);
    for (let i = 0; i < this.scores.length; i++) {
      for (let j = 0; j < this.levels.length; j++) {
        console.log(this.scores[i].level + " " + this.levels[j].name);
        if (this.scores[i].level === this.levels[j].name) {
          this.isScore[i] = this.levels[j].isScore;
        }
      }
    }
  }

  public parseScore(score: number, i: number): string {
    if (this.isScore[i]) {
      return score.toString();
    }
    let mil = Math.floor((score % 1000)).toString(),
    sec = Math.floor((score / 1000) % 60).toString(),
    min = Math.floor((score / (1000 * 60)) % 60).toString(),
    hr = Math.floor((score / (1000 * 3600))).toString();

    if (hr.length < 2) {
      hr = "0" + hr;
    }
    if (min.length < 2) {
      min = "0" + min;
    }
    if (sec.length < 2) {
      sec = "0" + sec;
    }

    return hr + ":" + min + ":" + sec + "." + mil;
  }

}
