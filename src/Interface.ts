export interface DataReader {
  data: string[][];
  read(filename: string): void;
}

export interface Analyzer<T1> {
  run(data: T1): T1;
}

export interface Reportable<T1, T2> {
  print(report: T1): T2;
}
