export declare const Addresses: {
    genesis: string;
    core: {
        1: {
            index: string;
            list: string;
            read: string;
            versions: {
                1: {
                    account: string;
                    connectors: string;
                    events: string;
                    instapool: string;
                    dydx_flash: string;
                };
                2: {
                    accountProxy: string;
                    accountDefault: string;
                    implementations: string;
                    account: string;
                    connectors: string;
                };
            };
        };
        137: {
            index: string;
            list: string;
            read: string;
            versions: {
                1: {
                    account: string;
                    connectors: string;
                    events: string;
                };
                2: {
                    accountProxy: string;
                    accountDefault: string;
                    implementations: string;
                    account: string;
                    connectors: string;
                };
            };
        };
    };
    connectors: {
        chains: {
            1: {
                versions: {
                    1: {
                        basic: string;
                        authority: string;
                        compound: string;
                        compound_old: string;
                        maker: string;
                        maker_old: string;
                        instapool: string;
                        oasis: string;
                        kyber: string;
                        curve: string;
                        curve_susd: string;
                        curve_sbtc: string;
                        curve_y: string;
                        oneInch: string;
                        dydx: string;
                        aave: string;
                        migrate: string;
                        compoundImport: string;
                        uniswap: string;
                        comp: string;
                        staking: string;
                        chi: string;
                        curve_claim: string;
                        curve_gauge: string;
                        gelato: string;
                        dydx_flash: string;
                        swerve: string;
                        curve_three: string;
                        instapool_v2: string;
                        compoundImport_v2: string;
                        math: string;
                        aave_v2: string;
                        aave_migrate: string;
                        fee: string;
                        refinance: string;
                        aave_v2_import: string;
                        aave_v1_import: string;
                        polygon_bridge: string;
                        aave_polygon_migrate: string;
                        aave_claim: string;
                        aave_stake: string;
                        dsa_migrate_v1_to_v2: string;
                    };
                    2: {
                        "AUTHORITY-A": string;
                        "BASIC-A": string;
                        "CREAM-A": string;
                        "FLASHPOOL-A": string;
                        "UNISWAP-V2-A": string;
                        "WETH-A": string;
                    };
                };
            };
            137: {
                versions: {
                    1: {
                        basic: string;
                        authority: string;
                    };
                    2: {
                        "1INCH-A": string;
                        "AAVE-V2-A": string;
                        "AUTHORITY-A": string;
                        "BASIC-A": string;
                        "AAVE-CLAIM-A": string;
                        "INSTAPOOL-A": string;
                        "PARASWAP-A": string;
                        "AAVE-V2-IMPORT-A": string;
                        "AAVE-V2-IMPORT-B": string;
                        "AAVE-CLAIM-B": string;
                    };
                };
            };
        };
    };
};
