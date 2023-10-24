"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const Reports_1 = require("./Reports");
const fs_1 = __importDefault(require("fs"));
class HtmlReport extends Reports_1.Report {
    print() {
        const html = `
    
      <div>
      <h1> HTML Report </h1>
      <p>${this.report}</p>
    </div>`;
        fs_1.default.writeFileSync("report.html", html);
        console.log("html report generated");
    }
}
exports.HtmlReport = HtmlReport;
