"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmCountAnalyzer = void 0;
class FilmCountAnalyzer {
    constructor(films) {
        this.films = films;
    }
    run(actor) {
        let count = 0;
        for (let film of this.films) {
            if (film[4] === actor) {
                count++;
            }
        }
        return `${actor} appeared in ${count} films`;
    }
}
exports.FilmCountAnalyzer = FilmCountAnalyzer;
