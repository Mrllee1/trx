// coded by inderHacker
    const TronWeb = require('tronweb');
    const hdWallet = require('tron-wallet-hd');
    
    const utils=hdWallet.utils;

    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider('https://api.trongrid.io'); 
    const solidityNode = new HttpProvider('https://api.trongrid.io:'); 
    const eventServer = 'https://api.trongrid.io'; 

    async function get_Balance(seed){
        const account = await utils.getAccountAtIndex(seed,0);
        const privateKey = account.privateKey;
        const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
        const address = TronWeb.defaultAddress.base58;
        TronWeb.trx.getBalance(address).then(result => console.log(result))
    }


    const args = process.argv;
    const sedd = args[2];
    get_Balance(seed);
