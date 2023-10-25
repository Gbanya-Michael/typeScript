import { FilmReader } from "./FilmReader";
import { Reporter } from "./Reporter";

let filmReader = FilmReader.fromCsv("films.csv");
let reporter = Reporter.consoleReportFilmCount(filmReader.films);

reporter.run("Bruce Willis");
