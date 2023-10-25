"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reporter = void 0;
const ConsoleReport_1 = require("./ConsoleReport");
const FilmCountAnalyzer_1 = require("./FilmCountAnalyzer");
class Reporter {
    constructor(reporter, analyzer) {
        this.reporter = reporter;
        this.analyzer = analyzer;
    }
    static consoleReportFilmCount(films) {
        return new Reporter(new ConsoleReport_1.ConsoleReport(), new FilmCountAnalyzer_1.FilmCountAnalyzer(films));
    }
    run(name) {
        this.reporter.print(this.analyzer.run(name));
    }
}
exports.Reporter = Reporter;
