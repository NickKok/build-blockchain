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


# Running the tests

 You could run the *.test.js using the jest with is a module of nodejs.

 ```
 cd build-blockchain
 npm run test
 ```
