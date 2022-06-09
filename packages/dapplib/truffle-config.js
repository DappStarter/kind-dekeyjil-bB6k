require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food edge remember nominee coil harvest ghost army gather'; 
let testAccounts = [
"0xf8e2cca59d16eae2dca3b7f4b1959c0194e9c4d6d02a5d357f0f318a9af837a0",
"0xcf06c7d3226b055c90c2806e2d1f9e12a7e58f0fbff00415c009d312999c6668",
"0x348867349c965e2f5defee0868337d6b126940dbe705a5020749d01556740b0e",
"0x9ca65fe3ae2ccb9816ef874571c40ddde356f3f4958fa5689f9a267b3ded5387",
"0x41d5f688f9902aa47550d7f40a837e878c8a0c138d45cb5f73760ef71c96c6b2",
"0x791ed4ba0dbd8c271c75b2ef01395f16fbb543f7d99e666a4bffc3af5f5883f6",
"0x878760fdd44dcdad098a4362f44c7490e732ae090f8bd3801d906fe9b7bbb7cf",
"0xd5b0d9b7e3e3408ba09102098d0d58bcd2769f32765b43d2dbb5a95f8eaacfee",
"0x7259b7e291b707a14e224848797d52df61714030c2e73b8988f6679534e40160",
"0x8b160889c0ac1ab1cf36caa62a64b364dc8ee7ffd6f5083fe2b3efc5ab4f6278"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

