import { Component, OnInit } from '@angular/core';
import { Game } from '../../shared/game.model';
import { ActivatedRoute, Params } from '@angular/router';
import { GameService } from '../../shared/game.service';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit{
  games!: Game[];
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const game = params['name']
      this.gameService.getGamesByPlatForm(game);
      this.games = this.gameService.thisPlatformGames;
    });
  }
}
