import { Component, ElementRef, ViewChild } from '@angular/core';
import { GameService } from '../shared/game.service';
import { Game } from '../shared/game.model';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('descriptionInput') descriptionInput!: ElementRef;
  @ViewChild('imageUrlInput') imageUrlInput!: ElementRef;
  @ViewChild('platformInput') platformInput!: ElementRef;

  constructor(public gameService: GameService) {}

  createDish() {
    const name: string = this.nameInput.nativeElement.value;
    const description: string = this.descriptionInput.nativeElement.value;
    const imageUrl: string = this.imageUrlInput.nativeElement.value;
    const platform: string = this.platformInput.nativeElement.value

    const game = new Game(name, imageUrl, platform, description);
    this.gameService.addGames(game);
  }
}
