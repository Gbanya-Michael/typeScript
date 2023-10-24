"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReport = void 0;
const Reports_1 = require("./Reports");
class ConsoleReport extends Reports_1.Report {
    print() {
        console.log(this.report);
    }
}
exports.ConsoleReport = ConsoleReport;
