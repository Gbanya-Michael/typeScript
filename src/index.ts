import { FilmReader } from "./FilmReader";
import { FilmCountAnalysis } from "./FilmCountAnaysis";
import { ConsoleReport } from "./ConsoleReport";
import { HtmlReport } from "./HtmlReport";

const reader = new FilmReader("films.csv");
const analyzer = new FilmCountAnalysis(reader.data);

const consoleReport = new ConsoleReport(analyzer.run("Bruce Willis"));
const htmlReport = new HtmlReport(analyzer.run("Bruce Willis"));

// consoleReport.print();
// htmlReport.print();
