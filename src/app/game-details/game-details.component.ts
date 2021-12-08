import { Component } from '@angular/core';
import { Game } from '../shared/game.model';
import { ActivatedRoute, Params } from '@angular/router';
import { GameService } from '../shared/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent {
  game!: Game;
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const gamesId = parseInt(params['id']);
      this.game = this.gameService.getGameIndex(gamesId);
    });
  }
}
