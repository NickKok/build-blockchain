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

After that you could make a GET to "localhost:3002/mine-transactios" so the person that create the block will get the MINING_REWARD and to clear the transactions array for the next block calculation as response to this GET is the block in the blockchain:

```
[
    {
        "timestamp": "Genesis time",
        "lastHash": "-------",
        "hash": "f1r57-h45h",
        "data": [],
        "nonce": 0,
        "difficulty": 4
    },
    {
        "timestamp": 1529932496628,
        "lastHash": "f1r57-h45h",
        "hash": "000371a604c507a71159e952cf3f1d300b3cb3b89f0648d433a2abac3a50c19b",
        "data": [
            {
                "id": "c164e130-7879-11e8-88cb-4756b330b237",
                "input": {
                    "timestamp": 1529932496579,
                    "amount": 500,
                    "address": "04bb40c18b94c3358d8985bdf16cdf669997c8ef7388fa8140e4ec1fbce73d6c77408972df2bdcf976d66adc6bc3dfeccb8cd7a7ce7a46762a3c2aa054c23fc485",
                    "signature": {
                        "r": "22c96a637d31174160d095314884760bf40b96754b101e0a672ac6ee852497a5",
                        "s": "a6875331c60cf08274e1a1483fe5bcaf37c5a7f42345d6c6f92eeb844581a158",
                        "recoveryParam": 0
                    }
                },
                "outputs": [
                    {
                        "amount": 50,
                        "address": "046087bb685d56dd01bd11f4f3d50ab7022cbaca67c636f527665442f7e88153434d04146108e47e1e788dd9b969477cfad8582aeb8592ff0b02f0d17b19c8dd8c"
                    }
                ]
            }
        ],
        "nonce": 419,
        "difficulty": 3
    },
    {
        "timestamp": 1529932524460,
        "lastHash": "000371a604c507a71159e952cf3f1d300b3cb3b89f0648d433a2abac3a50c19b",
        "hash": "00390f8e541b2fbb3b86c14c5675384e7868b30a3309f13e325ee316231527ac",
        "data": [
            {
                "id": "ce7d8a70-7879-11e8-8ced-d38cdc095052",
                "input": {
                    "timestamp": 1529932519578,
                    "amount": 500,
                    "address": "0479bfc9553fc45e239e8d49bdef52f1a44f47dda0692320936b1082d89690991e176776c34883b33069ab04ff7f655742d16feb36445a8627ad5f8de52b4bdf04",
                    "signature": {
                        "r": "aa07966c3bf793673777c66aee1b79fc716a02b1dfd4e3f1bb6e32b8f9c7d53c",
                        "s": "d7509d7a9438a4bc98ee2a24ff273cd2f1e8b036d6f1d5787b49b7b97aadd88b",
                        "recoveryParam": 1
                    }
                },
                "outputs": [
                    {
                        "amount": 440,
                        "address": "0479bfc9553fc45e239e8d49bdef52f1a44f47dda0692320936b1082d89690991e176776c34883b33069ab04ff7f655742d16feb36445a8627ad5f8de52b4bdf04"
                    },
                    {
                        "amount": 30,
                        "address": "foo-address"
                    },
                    {
                        "amount": 30,
                        "address": "foo-address"
                    }
                ]
            },
            {
                "id": "d2026b70-7879-11e8-88cb-4756b330b237",
                "input": {
                    "timestamp": 1529932524455,
                    "amount": 500,
                    "address": "044cb07473936d3b852b3aee25b40838fca1b78be8de94f45cedc1d990592050a8edfc9688b7170018ad1aeb5f7c4a3c257170344814107ef7e60c6aa8cb12ae77",
                    "signature": {
                        "r": "c65f343f3b5a18fa5a56cb2a0ce79b2024c305a2d9f3ff3ed10fec1010f883de",
                        "s": "c6c806317d7874b28fbd0d1bb5ac770093e4c7e2ab9c8526dd3b4a85cdf329ce",
                        "recoveryParam": 0
                    }
                },
                "outputs": [
                    {
                        "amount": 50,
                        "address": "046087bb685d56dd01bd11f4f3d50ab7022cbaca67c636f527665442f7e88153434d04146108e47e1e788dd9b969477cfad8582aeb8592ff0b02f0d17b19c8dd8c"
                    }
                ]
            }
        ],
        "nonce": 10,
        "difficulty": 2
    }
]

```



# Running the tests

 You could run the *.test.js using the jest with is a module of nodejs.

 ```
 cd build-blockchain
 npm run test
 ```
