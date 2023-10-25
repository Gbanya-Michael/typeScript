import fs from "fs";
import { Reportable } from "./Interface";
export class HtmlReport implements Reportable<string, void> {
  print(report: string): void {
    const html = ` 
     <div>
        <h1> HTML Report </h1>
        <p> ${report} </p>
      </div>`;
    fs.writeFileSync("report.html", html);
    console.log("html result generated");
  }
}
