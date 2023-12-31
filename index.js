require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const { twitterClient } = require("./twitterClient.js");
const CronJob = require("cron").CronJob;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const tweet = async () => {
  try {
    await twitterClient.v2.tweet(
      "Excited to share that I've just built my first Twitter bot using Node.js! 🚀🤖 It can schedule tweets based on time using Cron jobs, and I've used Express and the Twitter API v2 to make it happen. Learning and coding journey in progress! 🌐💻 #NodeJS #TwitterBot #Coding"
    );
  } catch (e) {
    console.log(e);
  }
};

const cronTweet = new CronJob("10 * * * *", async () => {
  tweet();
});

cronTweet.start();
