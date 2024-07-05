import { Genre } from './genre.interface';

export interface Game {
  name: string;
  background_image: string;
  metacritic: number;
  genres: Genre[];
}
