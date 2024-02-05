const dotenv = require('dotenv');
const path = require('path');
const env = dotenv.config({
  path: path.join(__dirname, '.env')
});

if (env.error) {
  throw new Error("no env file found");
}

module.exports = {
  parent: {
    rpc: process.env.ROOT_RPC,
  },
  child: {
    rpc: process.env.RAMESTTA_RPC,
  },
  pos: {
    parent: {
      erc20: '',
      erc721: '',
      erc1155: '',
      chainManagerAddress: '', // Address of RootChainManager for POS Portal
    },
    child: {
      erc721: '',
      erc20: '',
      weth: '',
      erc1155: '',
    },
  },
  SYNCER_URL: '', // Backend service which syncs the Matic sidechain state to a MySQL database which we use for faster querying. This comes in handy especially for constructing withdrawal proofs while exiting assets from Plasma.
  WATCHER_URL: '', // Backend service which syncs the Matic Plasma contract events on Ethereum mainchain to a MySQL database which we use for faster querying. This comes in handy especially for listening to asset deposits on the Plasma contract.
  user1: {
    // '<paste your private key here>' - A sample private key prefix with `0x`
    privateKey: process.env.USER1_PRIVATE_KEY,
    //'<paste address belonging to private key here>', Your address
    address: process.env.USER1_FROM
  },
  user2: {
    address: process.env.USER2_FROM
  },
  proofApi: process.env.PROOF_API,
  abiApi: process.env.ABI_API
}
