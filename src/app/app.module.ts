import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewGameComponent } from './new-game/new-game.component';
import { PlatformComponent } from './platform/platform.component';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GameService } from './shared/game.service';
import { GameItemComponent } from './platform/game-item/game-item.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { ShadowHoverDirective } from './directives/shadow-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    PlatformComponent,
    ToolbarComponent,
    GameItemComponent,
    GameDetailsComponent,
    ShadowHoverDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
