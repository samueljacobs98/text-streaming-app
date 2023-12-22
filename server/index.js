const express = require("express");
const cors = require("cors");
const app = express();
const loremIpsum = require("lorem-ipsum").LoremIpsum;

const port = 3001;

const lorem = new loremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

app.use(
  cors({
    origin: ["http://localhost:3000", "https://localhost:3000"],
  })
);

app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const sendData = setInterval(() => {
    const text = lorem.generateSentences(1);
    res.write(`data: ${text}\n\n`);
  }, 500);

  res.on("close", () => {
    console.log("close");
    clearInterval(sendData);
  });
});

app.listen(port, () => {
  console.log("Listening on port", port);
  console.log(`Connect to: http://localhost:${port}/stream
  Include following headers:
  \tContent-Type: text/event-stream
  \tCache-Control: no-cache
  \tConnection: keep-alive
  `);
});
