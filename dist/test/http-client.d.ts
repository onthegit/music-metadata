/// <reference types="node" resolution-mode="require"/>
import * as Stream from 'stream';
export interface IHttpResponse {
    headers: {
        [id: string]: string;
    };
    stream: Stream.Readable;
}
export interface IHttpClient {
    get: (url: string) => Promise<IHttpResponse>;
}
export declare class HttpClient implements IHttpClient {
    get(url: string): Promise<IHttpResponse>;
}
