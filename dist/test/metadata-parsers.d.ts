import { IAudioMetadata, IOptions } from '../lib/index.js';
declare type ParseFileMethod = (filePath: string, mimeType?: string, options?: IOptions) => Promise<IAudioMetadata>;
interface IParser {
    description: string;
    initParser: ParseFileMethod;
}
/**
 * Helps looping through different input styles
 */
export declare const Parsers: IParser[];
export {};
