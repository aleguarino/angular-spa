import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameResponse } from '../models/interfaces/game-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private httpClient: HttpClient) {}

  public findGames(): Observable<GameResponse> {
    return this.httpClient.get<GameResponse>(
      'https://rawg.io/api/games?token=&key=ff3b7561e5fb4d9e9f6330d6ca113330'
    );
  }
}
