import { CommonTagMapper } from '../common/GenericTagMapper.js';
/**
 * RIFF Info Tags; part of the EXIF 2.3
 * Ref: http://owl.phy.queensu.ca/~phil/exiftool/TagNames/RIFF.html#Info
 */
export const riffInfoTagMap = {
    IART: 'artist',
    ICRD: 'date',
    INAM: 'title',
    TITL: 'title',
    IPRD: 'album',
    ITRK: 'track',
    COMM: 'comment',
    ICMT: 'comment',
    ICNT: 'releasecountry',
    GNRE: 'genre',
    IWRI: 'writer',
    RATE: 'rating',
    YEAR: 'year',
    ISFT: 'encodedby',
    CODE: 'encodedby',
    TURL: 'website',
    IGNR: 'genre',
    IENG: 'engineer',
    ITCH: 'technician',
    IMED: 'media',
    IRPD: 'album' // Product, where the file was intended for
};
export class RiffInfoTagMapper extends CommonTagMapper {
    constructor() {
        super(['exif'], riffInfoTagMap);
    }
}
