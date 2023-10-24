import { Report } from "./Reports";
import fs from "fs";

export class HtmlReport extends Report {
  print(): void {
    const html = `
    
      <div>
      <h1> HTML Report </h1>
      <p>${this.report}</p>
    </div>`;
    fs.writeFileSync("report.html", html);
    console.log("html report generated");
  }
}
