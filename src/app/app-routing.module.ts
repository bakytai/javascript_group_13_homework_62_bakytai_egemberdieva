import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGameComponent } from './new-game/new-game.component';
import { PlatformComponent } from './platform/platform.component';

const routes: Routes = [
  {path: 'platform/game', component: PlatformComponent},
  {path: 'new/game', component: NewGameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
