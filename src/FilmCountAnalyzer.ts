import { FilmData } from "./FilmData";
import { Analyzer } from "./Interface";

export class FilmCountAnalyzer implements Analyzer<string> {
  constructor(public films: FilmData[]) {}
  run(actor: string): string {
    let count: number = 0;
    for (let film of this.films) {
      if (film[4] === actor) {
        count++;
      }
    }
    return `${actor} appeared in ${count} films`;
  }
}
