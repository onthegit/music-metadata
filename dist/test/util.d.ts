/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import { Readable } from 'node:stream';
/**
 * A mock readable-stream, using string to read from
 */
export declare class SourceStream extends Readable {
    private buf;
    constructor(buf: Buffer);
    _read(): void;
}
export declare const samplePath: string;
