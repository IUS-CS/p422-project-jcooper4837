import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LevelDataService } from '../level-data.service';
import { Score, ScoreDataService } from '../score-data.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  selectedLevelName: string;
  selectedLevel: Score[];

  constructor(
    private scoreDataService: ScoreDataService,
    private levelDataService: LevelDataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.selectLevel('Level-1');
  }

  public selectLevel(name: string): void {
    this.selectedLevelName = this.levelDataService.getLevel(name).name;
    this.selectedLevel = this.scoreDataService.getAllScores(this.selectedLevelName);
    this.selectedLevel = this.selectedLevel.sort((a, b) => b.score - a.score);
  }

}
