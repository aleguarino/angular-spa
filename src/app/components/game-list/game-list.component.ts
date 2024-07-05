import { Component, OnInit } from '@angular/core';
import { GameResponse } from 'src/app/models/interfaces/game-response.interface';
import { Game } from 'src/app/models/interfaces/game.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  public games: Game[] = [];
  public gameSelected: Game = Object.create(null);

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.findGames().subscribe({
      next: (resp: GameResponse) => {
        this.games = resp.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public onSelectGame(game: Game): void {
    this.gameSelected = game;
  }

  public onUnselectGame(): void {
    this.gameSelected = Object.create(null);
  }
}
