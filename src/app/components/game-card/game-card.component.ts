import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/models/interfaces/game.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input()
  game!: Game;
  @Output() sendGame = new EventEmitter<Game>();

  constructor() {}

  ngOnInit(): void {}

  public onSelectGame(): void {
    this.sendGame.emit(this.game);
  }
}
