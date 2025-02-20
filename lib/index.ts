import * as Stream from 'stream';
import * as strtok3 from 'strtok3';
import initDebug from 'debug';

import { parseFromTokenizer, scanAppendingHeaders } from './core.js';
import { ParserFactory } from './ParserFactory.js';
import { IAudioMetadata, IOptions } from './type.js';
import { RandomFileReader } from './common/RandomFileReader.js';

export { IAudioMetadata, IOptions, ITag, INativeTagDict, ICommonTagsResult, IFormat, IPicture, IRatio, IChapter } from './type.js';
export { parseFromTokenizer, parseBuffer, selectCover, orderTags, ratingToStars, IFileInfo } from './core.js';

const debug = initDebug('music-metadata:parser');

/**
 * Parse audio from Node Stream.Readable
 * @param stream - Stream to read the audio track from
 * @param fileInfo - File information object or MIME-type, e.g.: 'audio/mpeg'
 * @param options - Parsing options
 * @returns Metadata
 */
export async function parseStream(stream: Stream.Readable, fileInfo?: strtok3.IFileInfo | string, options: IOptions = {}): Promise<IAudioMetadata> {
  const tokenizer = await strtok3.fromStream(stream, typeof fileInfo === 'string' ? {mimeType: fileInfo} : fileInfo);
  return parseFromTokenizer(tokenizer, options);
}

