import { DSA } from '../dsa';
import { Spells } from '../spells';
import { Version } from '../internal';
export declare class Flashpool_v2 {
    private dsa;
    constructor(dsa: DSA);
    /**
    * Encode Instapool_v2 flashBorrowWithCast calldata arg.
    *
    * @param spells The spells instance
    */
    encodeFlashCastData(spells: Spells, version?: Version): string;
}
