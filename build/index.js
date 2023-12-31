"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FilmReader_1 = require("./FilmReader");
const FilmCountAnaysis_1 = require("./FilmCountAnaysis");
const ConsoleReport_1 = require("./ConsoleReport");
const HtmlReport_1 = require("./HtmlReport");
const reader = new FilmReader_1.FilmReader("films.csv");
const analyzer = new FilmCountAnaysis_1.FilmCountAnalysis(reader.data);
const consoleReport = new ConsoleReport_1.ConsoleReport(analyzer.run("Bruce Willis"));
const htmlReport = new HtmlReport_1.HtmlReport(analyzer.run("Bruce Willis"));
// consoleReport.print();
// htmlReport.print();
