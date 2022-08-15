import * as https from 'https';
import * as http from 'http';
export class HttpClient {
    get(url) {
        return new Promise((resolve, reject) => {
            const request = (url.startsWith('https') ? https : http).get(url);
            request.on('response', resp => {
                resolve({
                    headers: resp.headers,
                    stream: resp
                });
            });
            request.on('abort', () => {
                reject(new Error('abort'));
            });
            request.on('error', err => {
                reject(err);
            });
        });
    }
}
