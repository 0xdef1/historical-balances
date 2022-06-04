Fetch historical balances. 

    yarn install
    yarn fetch-balance --help
    
    Options:
        --help     Show help                                             [boolean]
        --version  Show version number                                   [boolean]
     -t, --token    Token Address
                   [string] [default: "terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3"]
    -o, --owner    Owner Address                               [string] [required]
    -b, --block    Block Height                              [number] [default: 0]

Example:

    yarn fetch-balance -t <TOKEN_ADDRESS> -o <OWNER_ADDRESS> -b <BLOCK_HEIGHT>
