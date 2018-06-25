const Wallet = require('./index');
const TransactionPool = require('./transaction-pool');
const Blockchain = require('../blockchain');
const { INITIAL_BALANCE } = require('../config');

describe('Wallet', ()=> {
  let wallet, tp, bc;

  beforeEach(() => {
    tp = new TransactionPool();
    wallet = new Wallet();
    bc = new Blockchain();
  });

  describe('creating a transaction', ()=> {
    let transaction, sendAmount, recipient ;

    beforeEach(() => {
      sendAmount = 50;
      recipient = 'r4nd-4ddr355';
      transaction = wallet.createTransaction(recipient, sendAmount,bc ,tp);
    });

    describe('and doing the same transaction', ()=> {

      beforeEach(() => {
        transaction = wallet.createTransaction(recipient, sendAmount, bc,tp);
      });

      it('doubles the `sendAmount` subtracted from the wallet balance', ()=> {
        expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount).toEqual(wallet.balance - sendAmount* 2);
      });

      it('clones the `sendAmount` output for the recipient',()=> {
        expect(transaction.outputs.filter(output => output.address === recipient).map(output => output.amount)).toEqual([sendAmount, sendAmount]);

      });

    });
  });

  describe('calculating a balance', ()=> {
    let addBalance, repeatAdd, senderWallet;

    beforeEach( ()=> {
      senderWallet = new Wallet();
      addBalance =100;
      repeatAdd = 3;
      for(let i=0; i< repeatAdd; i++){
          senderWallet.createTransaction(wallet.publicKey, addBalance, bc, tp);
      }
      bc.addBlock(tp.transactions);

    });

    it('calculates the balance for Blockchain transactions matching the recipient', ()=> {
      console.log(bc);
      expect(wallet.calculateBalance(bc)).toEqual(INITIAL_BALANCE + (addBalance * repeatAdd));
    });

    it('calculates the balance from the blockchain transactions matching to the sender',()=> {
      expect(senderWallet.calculateBalance(bc)).toEqual(INITIAL_BALANCE -(addBalance * repeatAdd));
    });

    describe('and the recipeint conducts an transaction',()=> {
      let subtractBalance, recipeintBalance;

      beforeEach( ()=>{
        tp.clear();
        subtractBalance=60;
        recipeintBalance = wallet.calculateBalance(bc);
        wallet.createTransaction(senderWallet.publicKey,subtractBalance , bc ,tp );
        bc.addBlock(tp.transactions)
      });

      describe('and the sender sends another transaction to the recipeint', ()=> {
        beforeEach( ()=> {
            tp.clear();
            senderWallet.createTransaction(wallet.publicKey,addBalance , bc ,tp );
            bc.addBlock(tp.transactions);
        });

        it('calculates the recipient balance only using transactions since its the most recent one', ()=> {
          expect(wallet.calculateBalance(bc)).toEqual(recipeintBalance- subtractBalance+ addBalance);
        });

      });
    });
  });
});
