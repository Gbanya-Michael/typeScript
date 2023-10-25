import { Reportable } from "./Interface";
export class ConsoleReport implements Reportable<string, void> {
  print(report: string): void {
    console.log(report);
  }
}
