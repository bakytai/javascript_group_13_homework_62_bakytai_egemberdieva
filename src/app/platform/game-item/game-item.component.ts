import { Component, Input } from '@angular/core';
import { Game } from '../../shared/game.model';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent {
  @Input() game!: Game;
  constructor() {}
}
