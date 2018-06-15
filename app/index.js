//App Class

const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new Blockchain();

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

  res.redirect('/blocks');
});

app.listen(HTTP_PORT, () => console.log(`Listening on the port ${HTTP_PORT}`));
