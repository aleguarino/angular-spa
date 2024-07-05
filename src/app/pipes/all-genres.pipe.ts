import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '../models/interfaces/genre.interface';

@Pipe({
  name: 'allGenres',
})
export class AllGenresPipe implements PipeTransform {
  transform(genres: Genre[]): string {
    let result = '';
    genres.forEach((genre) => {
      result += genre.name + ', ';
    });
    return result.slice(0, -2);
  }
}
