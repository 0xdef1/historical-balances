
import { LCDClient } from '@terra-money/terra.js';
import yargs from 'yargs/yargs';

const terra = new LCDClient({
    URL: '', // Insert your mantlemint node address
    chainID: 'columbus-5',
});

const PRE_DEPEG_HEIGHT = 7544910
const POST_DEPEG_HEIGHT = 7790000
const ASTRO_TOKEN_ADDRESS = 'terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3'
const xASTRO_TOKEN_ADDRESS = 'terra14lpnyzc9z4g3ugr4lhm8s4nle0tq8vcltkhzh7'

main()
async function main() {

    const argv = yargs(process.argv.slice(2)).options({
        t: { type: 'string', alias: 'token', default: ASTRO_TOKEN_ADDRESS, describe: 'Token Address' },
        o: { type: 'string', alias: 'owner', demandOption: true, describe: 'Owner Address' },
        b: { type: 'number', alias: 'block', default: 0, describe: 'Block Height' },
    }).parseSync();

    let balance = await fetchBalance(argv.t, argv.o, argv.b)
    console.log('Token Address: ', argv.t)
    console.log('Owner: ', argv.o)
    console.log('Block: ', argv.b)
    console.log('Balance: ', balance)
}

async function fetchBalance(token: string, owner: string, block: number) {
    let result = await terra.wasm.contractQuery<{balance: string}>(token, 
        { balance: { address: owner } },
        { height: `${block == 0 ? 'latest' : block}` } 
    )
    return result.balance
}
