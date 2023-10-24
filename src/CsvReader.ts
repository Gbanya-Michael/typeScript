import fs from "fs";

export abstract class CsvReader<Type> {
  data: Type[] = [];
  constructor(public filename: string) {
    this.data = this.read(filename);
  }

  abstract mapRow(row: string[]): any;

  read(filename: string): Type[] {
    return fs
      .readFileSync(this.filename, { encoding: "utf8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
