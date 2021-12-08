import { EventEmitter } from '@angular/core';
import { Game } from './game.model';

export class GameService {
  gamesChanges = new EventEmitter<Game[]>();
  thisPlatformGames!: Game[];
  private games: Game[] = [
    new Game('Need for Speed', 'https://s3.gaming-cdn.com/images/products/824/271x377/game-origin-need-for-speed-cover.jpg', 'NES', 'Need for Speed is a racing video game franchise published by Electronic Arts and currently developed by Criterion Games, the developers of Burnout. The series generally centers around illicit street racing and tasks players to complete various types of races while evading the local law enforcement in police pursuits.'),
    new Game('Grand Theft Auto', 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png', 'Sega Genesis', 'Grand Theft Auto is a series of action-adventure games created by David Jones and Mike Dailly. Later titles were developed under the oversight of brothers Dan and Sam Houser, Leslie Benzies and Aaron Garbut.'),
    new Game('The Crew 2', 'https://file-cdn.gvgmall.com/product/20171225194109_gvg.png', ' Super Nintendo', 'The Crew 2 is a 2018 open world racing video game developed by Ivory Tower and published by Ubisoft for Microsoft Windows, PlayStation 4, Xbox One and Stadia. It is the sequel to 2014s The Crew. It features a persistent open world environment for free-roaming across a scaled-down recreation of the United States.'),
    new Game('Marvel’s Spider-Man', 'https://metarankings.ru/wp-content/uploads/spider-man-box-cover-art-100x140.jpg', 'NES', ' В Marvel’s Spider-Man для PS4 от Insomniac Games вы встретитесь с самым знаменитым супергероем всех времен, который обзавелся новыми зрелищными приемами. К выдающимся акробатическим способностям, импровизации,...'),
    new Game('The Sims', 'https://s3.gaming-cdn.com/images/products/272/orig/the-sims-4-pc-mac-game-origin-cover.jpg', 'Sega Genesis', 'The Sims is a series of life simulation video games developed by Maxis and published by Electronic Arts. The franchise has sold nearly 200 million copies worldwide, and it is one of the best-selling video game series of all time. '),
    new Game('Minecraft', 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png', 'Super Nintendo', 'Minecraft is a sandbox video game developed by the Swedish video game developer Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language.'),
  ];


  getGames() {
    return this.games.slice();
  }


  getGameIndex(index: number) {
    return this.games[index];
  }

  getGamesByPlatForm(platform: string) {
    this.thisPlatformGames = this.games.filter(platforms => platforms.platform === platform);
  }

  addGames(game: Game) {
    this.games.push(game);
    this.gamesChanges.emit(this.games);
  }
}
