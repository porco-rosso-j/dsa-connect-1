export * as connectorsV1 from './v1';
export * as connectorsV2_M1 from './v2';
import * as connectorsV1 from './v1';
import { connectorsV2_M1 } from './v2';
export declare type Connector = keyof typeof connectorsV1 | keyof typeof connectorsV2_M1;
export declare const connectors: {
    versions: {
        1: typeof connectorsV1;
        2: {
            "AUTHORITY-A": import("web3-utils").AbiItem[];
            "BASIC-A": import("web3-utils").AbiItem[];
            "CREAM-A": import("web3-utils").AbiItem[];
            FALSHPOOL_A: import("web3-utils").AbiItem[];
            "UNISWAP-V2-A": import("web3-utils").AbiItem[];
            "WETH-A": import("web3-utils").AbiItem[];
        };
    };
};
