"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FilmReader_1 = require("./FilmReader");
const Reporter_1 = require("./Reporter");
let filmReader = FilmReader_1.FilmReader.fromCsv("films.csv");
let reporter = Reporter_1.Reporter.consoleReportFilmCount(filmReader.films);
reporter.run("Bruce Willis");
