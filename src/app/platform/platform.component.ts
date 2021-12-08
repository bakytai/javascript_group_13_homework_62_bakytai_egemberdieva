import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../shared/game.service';
import { Game } from '../shared/game.model';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  @ViewChild('nameLi') nameLi!: ElementRef;
  platformsName = ['NES','Sega Genesis','Super Nintendo'];
  newArray!: Game[];
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.newArray = this.gameService.thisPlatformGames;
    this.gameService.gamesChanges.subscribe((games: Game[]) => {
      this.newArray = games;
    })
  }

  onClick() {
    const name = this.nameLi.nativeElement.innerText;
    this.gameService.getGamesByPlatForm(name);
  }
}
