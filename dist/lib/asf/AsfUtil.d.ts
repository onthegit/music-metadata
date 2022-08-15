/// <reference types="node" resolution-mode="require"/>
import { Buffer } from 'node:buffer';
import { DataType } from './AsfObject.js';
export declare type AttributeParser = (buf: Buffer) => boolean | string | number | bigint | Buffer;
export declare class AsfUtil {
    static getParserForAttr(i: DataType): AttributeParser;
    static parseUnicodeAttr(uint8Array: Uint8Array): string;
    private static attributeParsers;
    private static parseByteArrayAttr;
    private static parseBoolAttr;
    private static parseDWordAttr;
    private static parseQWordAttr;
    private static parseWordAttr;
}
