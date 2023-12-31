"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
        this.data = this.read(filename);
    }
    read(filename) {
        return fs_1.default
            .readFileSync(this.filename, { encoding: "utf8" })
            .split("\n")
            .map((row) => {
            return row.split(",");
        })
            .map(this.mapRow);
    }
}
exports.CsvReader = CsvReader;
