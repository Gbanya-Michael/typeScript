import { ConsoleReport } from "./ConsoleReport";
import { FilmCountAnalyzer } from "./FilmCountAnalyzer";
import { FilmData } from "./FilmData";
import { Analyzer, Reportable } from "./Interface";

export class Reporter {
  constructor(
    public reporter: Reportable<string, void>,
    public analyzer: Analyzer<string>
  ) {}
  static consoleReportFilmCount(films: FilmData[]): Reporter {
    return new Reporter(new ConsoleReport(), new FilmCountAnalyzer(films));
  }
  run(name: string): void {
    this.reporter.print(this.analyzer.run(name));
  }
}
