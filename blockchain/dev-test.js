/*
Create new block and print them out.
const Block= require('./block');

const block = new Block('foo','bar','zoo','baz');

console.log(block.toString());
console.log(Block.genesis().toString());


const fooBlock=  Block.mineBlock(Block.genesis(),'foo');
console.log(fooBlock.toString());
*/

/*
const Blockchain = require('./index');

Create 10 blocks to the Blockchain to test it.
const bc = new Blockchain();

for(let i=0; i<10; i++){
  console.log(bc.addBlock(`foo ${i}`).toString());

}
*/
//Test the walley class and the chain-utils
const Wallet = require('../wallet');
const wallet = new Wallet();

console.log(wallet.toString());
