import { EventEmitter } from '@angular/core';
import { Game } from './game.model';

export class GameService {
  gamesChanges = new EventEmitter<Game[]>();

  private games: Game[] = [

  ];

  getGames() {
    return this.games.slice();
  }

  addGames(game: Game) {
    this.games.push(game);
    this.gamesChanges.emit(this.games);
  }
}
