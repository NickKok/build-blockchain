//App Class

const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('../blockchain');
const P2pServer = require('./p2p-server');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new Blockchain();
const p2pServer = new P2pServer(bc);

app.use(bodyParser.json());

//Run npm run dev
//Check out the this link on your browser or on postman : localhost:3001/blocks
app.get('/blocks', (req, res) => {
  res.json(bc.chain);
});

//Run npm run dev
//Use  postman  to make a post request on: localhost:3001/mine having on the body json data
app.post('/mine', (req, res)=> {
  const block = bc.addBlock(req.body.data);
  console.log(`New block added: ${block.toString()}`);

  p2pServer.syncChains();

  res.redirect('/blocks');
});

app.listen(HTTP_PORT, () => console.log(`Listening on the port ${HTTP_PORT}`));
p2pServer.listen();
