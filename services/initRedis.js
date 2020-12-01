const Redis = require("ioredis");

const redis = new Redis();

redis.on("connect", () => {
    console.log("client connected to Redis")
});

redis.on("ready", () => {
    console.log("client connected to Redis and ready to use")
});

redis.on("error", (err) => {
   console.log(err)
});

redis.on("end", () => {
   console.log("client disconnected from Redis")
});

redis.on("SIGINT", () => {
   redis.disconnect();
});

module.exports = redis;
