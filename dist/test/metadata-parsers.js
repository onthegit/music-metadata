import fs from 'node:fs';
import * as mm from '../lib/index.js';
/**
 * Helps looping through different input styles
 */
export const Parsers = [
    {
        description: 'parseFile',
        initParser: (filePath, mimeType, options) => {
            return mm.parseFile(filePath, options);
        }
    }, {
        description: 'parseStream',
        initParser: (filePath, mimeType, options) => {
            const stream = fs.createReadStream(filePath);
            return mm.parseStream(stream, { mimeType }, options).then(metadata => {
                stream.close();
                return metadata;
            });
        }
    }, {
        description: 'parseBuffer',
        initParser: (filePath, mimeType, options) => {
            const buffer = fs.readFileSync(filePath);
            const array = new Uint8Array(buffer);
            return mm.parseBuffer(array, { mimeType }, options);
        }
    }
];
