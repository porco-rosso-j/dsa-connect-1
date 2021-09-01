import * as basics from './basics';
export declare const Abi: {
    basics: typeof basics;
    connectors: {
        versions: {
            1: typeof import("./connectors/v1");
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
    core: {
        index: import("web3-utils").AbiItem[];
        list: import("web3-utils").AbiItem[];
        read: import("web3-utils").AbiItem[];
        versions: {
            1: {
                account: import("web3-utils").AbiItem[];
                connectors: typeof import("./core/v1/connector");
                events: typeof import("./core/v1/events");
            };
            2: {
                accountProxy: typeof import("./core/v2/accountProxy");
                accountDefault: typeof import("./core/v2/accountDefault");
                implementations: typeof import("./core/v2/implementations");
                account: import("web3-utils").AbiItem[];
                connectors: typeof import("./core/v2/connectorsM1");
            };
        };
    };
    read: import("web3-utils").AbiItem[];
};
