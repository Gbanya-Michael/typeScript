"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmReader = void 0;
const utils_1 = require("./utils");
const CsvReader_1 = require("./CsvReader");
class FilmReader {
    constructor(reader) {
        this.reader = reader;
        this.films = [];
        this.load();
    }
    static fromCsv(filename) {
        return new FilmReader(new CsvReader_1.CsvReader(filename));
    }
    load() {
        this.films = this.reader.data.map((col) => {
            return [col[0], parseInt(col[1]), col[2], (0, utils_1.parseDate)(col[3]), col[4]];
        });
    }
}
exports.FilmReader = FilmReader;
