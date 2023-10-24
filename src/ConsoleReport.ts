import { Report } from "./Reports";

export class ConsoleReport extends Report {
  print(): void {
    console.log(this.report);
  }
}
