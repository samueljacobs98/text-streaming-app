# Streaming Server

## Installation

### Install dependencies

```bash
npm install
```

### Install pm2

```bash
npm install pm2 -g
```

## Run

To run the server without pm2:

```bash
npm start
```

To run the server with pm2, enabling automatic restart on crash and improved logging:

```bash
node server
```

## Stop

To stop the server with pm2:

```bash
npm run stop
```

## Monitor

To monitor the server with pm2:

```bash
npm run monitor
```
