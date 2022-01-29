require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note predict uniform hunt forest flock gaze'; 
let testAccounts = [
"0xd144542e384e2832ce0fc9469b906e302a0a78fe2da7fc07d20464b0d2e8c7f0",
"0xd2b670d2524be9f06523f590fc5b3728f65f963a51175b741e3c22051ee0802d",
"0x7f978c0fcd4b1dfc0576fdaa024925253684034b0a9fb7debf44a29178c1a05e",
"0x3b1d2fa2d5ec70212aed543deeb44eb8e761629b6418d0dfc8e5b96739f2f89b",
"0xee45180d1d52b9645dd38156c5424dc43c95d1296f1cc01a65e4cf5d9286a9f8",
"0x16ddab8431c241f9fa11d02ee2032c0446a0a0175e9fa18ac75539ebc95f211b",
"0xf31211e43e7016351042c2857b3c5e5f2e23d69b2c7fdd235cb621e9d5ff763f",
"0xcc0c6547d6d5df96cb896b6c3bbb07d74ba42cfc34c5b030289562ac11cae8cd",
"0xe197fb75336659a3161b8e5e103f607d6f640b77a2527c49d1c3ffcdc7bd59dc",
"0x2bc2bb9d7172da181f5223e9ab38a379898b907a4fde25a00d2208687f201359"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

