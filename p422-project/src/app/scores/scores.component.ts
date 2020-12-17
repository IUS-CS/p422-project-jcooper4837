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
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  selectedGameName: string;
  selectedLevelName: string;
  selectedScores: Observable<Score[]>;
  selectedLevel: Observable<Level>;
  selectedGame: Observable<Game>;
  scores: Score[];
  level: Level;
  game: Game;
  
  user: string;
  score: number;
  date: string;
  platform: string;
  proof: string;
  link: string;
  comment: string;
  status = '';
  statusIsError = false;

  model = new FormGroup({
    newUser: new FormControl('', Validators.required),
    newScore: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(0)]),
    newHr: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(0)]),
    newMin: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(0)]),
    newSec: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(0)]),
    newMil: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(0)]),
    newDate: new FormControl(),
    newPlatform: new FormControl(),
    newProof: new FormControl(),
    newLink: new FormControl(),
    newComment: new FormControl()
  })

  constructor(
    private scoreDataService: ScoreDataService,
    private levelDataService: LevelDataService,
    private gameDataService: GameDataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    ) { }

  test(): boolean {
    return true;
  }
  ngOnInit(): void {
    this.selectedGame = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Game> => {
        return this.gameDataService.getGame(params.get('game'));
      })
    );
    this.selectedLevel = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Level> => {
        return this.levelDataService.getLevel(params.get('game'), params.get('level'));
      })
    );
    this.selectedScores = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Score[]> => {
        this.selectedGameName = params.get('game');
        this.selectedLevelName = params.get('level');
        return this.scoreDataService.getAllScores(params.get('game'), params.get('level'));
      })
    );
    this.selectedGame.subscribe(r => {
      this.game = r;
      this.selectedLevel.subscribe(r => {
        this.level = r;
        this.selectedScores.subscribe(r => {
          this.scores = r;
          this.sortScores();
        });
      });
    });
  }

  public sortScores(): void {
    if (this.level.isAscending) {
      this.scores.sort((a, b) => b.score - a.score)
    } else {
      this.scores.sort((a, b) => a.score - b.score)
    }
    console.log("sorted");
  }

  public parseScore(score: number): string {
    if (this.level.isScore) {
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

  public parseTime(): number {
    let mils = this.model.value.newMil,
    secs = this.model.value.newSec * 1000,
    mins = this.model.value.newMin * 60000,
    hrs = this.model.value.newHr * 3600000;

    console.log(mils + " " + secs + " " + mins + " " + hrs);
    let res = +mils + +secs + +mins + +hrs;
    console.log(res);

    return res;
  }

  onSubmit(): void {
    if (!this.model.valid) {
      console.log('fail');
      return;
    }

    let submission = new Score(
      this.selectedGameName,
      this.selectedLevelName,
      this.model.value.newUser,
      this.model.value.newScore,
      this.model.value.newDate,
      this.model.value.newPlatform,
      this.model.value.newProof,
      this.model.value.newLink,
      this.model.value.newComment
    )
    if (this.level.isScore) {
      if (this.model.value.newScore === 0) {
        return;
      }
    } else {
      if (this.model.value.newHr === 0 && this.model.value.newMin === 0 && this.model.value.newSec === 0 && this.model.value.newMil === 0) {
        return;
      }
      submission.score = this.parseTime();
    }

    this.scoreDataService.saveSubmission(this.selectedGameName, this.selectedLevelName, submission)
      .subscribe(
        next => {
          this.status = 'Saved!';
          this.statusIsError = false;
        },
        err => {
          this.status = err;
          this.statusIsError = true;
        }
      );

    console.log('success');
  }
  
  /*public selectLevel(name: string): void {
    this.selectedScores = this.scoreDataService.getAllScores(this.selectedGameName, this.selectedLevelName);
    console.log(this.selectedGameName, this.selectedLevelName);
    //this.selectedScores = this.selectedScores.sort((a, b) => b.score - a.score);
  }*/

}
