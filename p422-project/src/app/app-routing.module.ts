import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { LevelsComponent } from './levels/levels.component';
import { ScoresComponent } from './scores/scores.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'games', component: GamesComponent},
  { path: 'game/:game', component: LevelsComponent},
  { path: 'game/:game/:level', component: ScoresComponent},
  { path: 'user/:user', component: ProfileComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
