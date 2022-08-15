/// <reference types="node" resolution-mode="require"/>
import * as fs from 'fs';
export declare class Row {
    values: string[];
    constructor(values: string[]);
}
export declare class Table {
    private static padEnd;
    private static writeRow;
    private static lineToString;
    rows: Row[];
    header?: Row;
    writeTo(out: fs.WriteStream): void;
    private calcColSizes;
}
