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
[
"data":"Some Data over Here"
]

```

# Running the tests

 You could run the *.test.js using the jest with is a module of nodejs.
 ```
 cd build-blockchain
 npm run test
 ```
