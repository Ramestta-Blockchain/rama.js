import { use } from "@ramestta/ramajs";
import { Web3ClientPlugin } from "@ramestta/rama-ethers";

use(Web3ClientPlugin);

console.log('process.env.NODE_ENV', process.env.NODE_ENV);


import './map_promise.spec'
import './pos_client.spec'
import './erc20.spec'
import './erc721.spec'
import './erc1155.spec'
