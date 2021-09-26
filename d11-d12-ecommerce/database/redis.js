const redis = require('redis');
const connectRedis = require('connect-redis');
const session = require('express-session');

const RedisStore = connectRedis(session);

// connecting to redis
const redisClient = redis.createClient({
	host: 'localhost',
	port: 6379,
});

redisClient.on('error', err => {
	console.log('unable to connect to redis', err);
});

redisClient.on('connect', () => {
	console.log('connected to redis');
});

module.exports = {
	redisClient,
	RedisStore,
	session,
};
