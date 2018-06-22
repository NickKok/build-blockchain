# Build Your Own BlockChain Using Nodejs

# Prerequisites
1. You will need a command line application. For MacOS and Linux, I recommend the native Terminal application. Iterm2 is also a good option on MacOS. For Windows, I recommend using the Git Bash shell application.

2. I use NodeJS as the engine to run our JavaScript-based project. Make sure you have Node and nmp installed on your system.

You could check it running the command
```
$ node -v
v8.11.3 (or something similar)

$nmp -v
5.6.0 (or something similar)
```
3. I use a tool called Postman. This app allow us to send custom HTTP Requests to our running blockchain servers.
Here is the link to install Postman: https://www.getpostman.com/docs/postman/launching_postman/installation_and_updates

# Installing
To run in

```
cd build-blochain

npm run dev
```
Check out the this link on your browser or on postman : localhost:3001/blocks (GET) request to the blocks in the Block chain

Or Use  postman  to make a post request on: localhost:3001/mine having on the body json data

like

```
{
"data":"Some Data over Here"
}

```

and we get as response

```
[
    {
        "timestamp": "Genesis time",
        "lastHash": "-------",
        "hash": "f1r57-h45h",
        "data": []
    },
    {
        "timestamp": 1529053407902,
        "lastHash": "f1r57-h45h",
        "hash": "549b93e4e96d9f9e683910bdbe3ed5fbcfa49932eee22782a008daeb463fc530",
        "data": "Some Data over Here"
    }
]
```


To run the Websocket and create peers on open a terminal and run

```
$ nmp run dev
```
Now we have the first socket. Next open an new terminal and run again

```
$ HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev
```
So now you will see "Socket connected". So on our networks we have two peers.

For the next one open a new terminal and run

```
$ HTTP_PORT=3003 P2P_PORT=5003 PEERS=ws://localhost:5001,ws://localhost:5002 npm run dev
```

Follow the previous steps to create as many as you want.


To get the publickey each user there is a GET request using this link

"localhost:3001/public-key"  where the port is the listening port of each client
as a response we get:

```
{
    "publicKey":"041f96e0c5eff595362e6eadc95d849b6641297ca01958f086d9f270bb98b663e426bd1846eec2de44f86fda0087852c9ecf7a575ede4e9b6f65caed8cfeee2220"
}
```

Also to get the transactions of the Blockchain there is a GET request using this link
"localhost:3001/transactions".

At first you will get as response  an empty array. like

```
[]
```

Using Postman you can make a post request at "localhost:3001/transact" and as a body use
JSON schema

```
{

	"recipient": "foo",
	"amount": 50

}
```
 So after this from the it call automatical the GET method and we have as response

 ```
 [
     {
         "id": "256910c0-75f5-11e8-8993-f940b898d961",
         "input": {
             "timestamp": 1529655875235,
             "amount": 500,
             "address": "0492796237568b408978d9bae0b13d5ffcbfce61ee1e8cf5c944745c7118bbf7f47c69ad2b4703474a516bda2dd895d914c01602c64dac3aa3eff93ad7ee7be83d",
             "signature": {
                 "r": "1764104b3a2e1c478ae28e791e917852a5dcc433f7bb990cb9a062a44dd5d22c",
                 "s": "552bf6d33a8feb2784897a9890e3593591f668e64264e021a7d0d0758ed7459b",
                 "recoveryParam": 1
             }
         },
         "outputs": [
             {
                 "amount": 450,
                 "address": "0492796237568b408978d9bae0b13d5ffcbfce61ee1e8cf5c944745c7118bbf7f47c69ad2b4703474a516bda2dd895d914c01602c64dac3aa3eff93ad7ee7be83d"
             },
             {
                 "amount": 50,
                 "address": "foo"
             },

         ]
     }
]
 ```

 You could try this creating with terminal lots of sockets to be connected together as previous and make some transactions like

```
[
    {
        "id": "256910c0-75f5-11e8-8993-f940b898d961",
        "input": {
            "timestamp": 1529655875235,
            "amount": 500,
            "address": "0492796237568b408978d9bae0b13d5ffcbfce61ee1e8cf5c944745c7118bbf7f47c69ad2b4703474a516bda2dd895d914c01602c64dac3aa3eff93ad7ee7be83d",
            "signature": {
                "r": "1764104b3a2e1c478ae28e791e917852a5dcc433f7bb990cb9a062a44dd5d22c",
                "s": "552bf6d33a8feb2784897a9890e3593591f668e64264e021a7d0d0758ed7459b",
                "recoveryParam": 1
            }
        },
        "outputs": [
            {
                "amount": 300,
                "address": "0492796237568b408978d9bae0b13d5ffcbfce61ee1e8cf5c944745c7118bbf7f47c69ad2b4703474a516bda2dd895d914c01602c64dac3aa3eff93ad7ee7be83d"
            },
            {
                "amount": 50,
                "address": "foo"
            },
            {
                "amount": 50,
                "address": "foo"
            },
            {
                "amount": 50,
                "address": "foo"
            },
            {
                "amount": 50,
                "address": "foo"
            }
        ]
    },
    {
        "id": "91e60b90-75f5-11e8-b69f-c7860ad0bf18",
        "input": {
            "timestamp": 1529655821001,
            "amount": 500,
            "address": "042e6ae525f479eb6df39179682ba223984e36d24939179806b3ec73721a2d6b4dd223fe52f7058310fbe213c44f9e33af3d9005bbc02d3563f8384d62faa08e95",
            "signature": {
                "r": "60ef147b0376463938ea219ea01bc10f6bddbdef544f11e1cf7ae7611ef92fc4",
                "s": "2b08bee3e9ea49ffab212290cf34e44d241279ed3d5b63bcd9a3776042fb0984",
                "recoveryParam": 0
            }
        },
        "outputs": [
            {
                "amount": 400,
                "address": "042e6ae525f479eb6df39179682ba223984e36d24939179806b3ec73721a2d6b4dd223fe52f7058310fbe213c44f9e33af3d9005bbc02d3563f8384d62faa08e95"
            },
            {
                "amount": 100,
                "address": "bar"
            }
        ]
    }
]
```

# Running the tests

 You could run the *.test.js using the jest with is a module of nodejs.

 ```
 cd build-blockchain
 npm run test
 ```
