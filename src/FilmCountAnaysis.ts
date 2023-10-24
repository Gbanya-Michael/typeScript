import { Analyzer } from "./Analyzer";
import { FilmData } from "./FilmData";
export class FilmCountAnalysis extends Analyzer<string, FilmData[]> {
  run(actor: string): string {
    let count: number = 0;

    for (let film of this.data) {
      if (film[4] === "Bruce Willis") {
        count++;
      }
    }
    return `${actor} appeared in ${count} films.`;
  }
}
