## Redis

Redis is a open-source in mermory data structure store used ad database, cache and message broker.

### setup

1. starting redis server - `sudo service redis-server start`
2. entering redis cli - `redix-cli`

### basics

redis stores data in a key value pair. and the value should always be a `string`
always store a json object

### using redis

Baisc commands 🦊

- SET `key` `val`
- GET `key`
- TTL `key`
- DEL `key`
- EXISTS `key`
- FLUSHALL
- EXPIRE `key` `time` (seconds)

---

Using `Arrays` in redis 🏹

- LPUSH arr val
- RPUSH arr val
- LRANGE arr start stop
- LPOP arr
- RPOP arr

---

`sets` - avoids duplicates 🤓

- adding to a set - `SADD name value`
- get all values of a set - `SMEMBERS setName`

---

`Objects` - can have nested properties

- adding a value - `HSET key field val`
- getting a value - `HGET key field`
- get all values - `HGETALL key`
- delete something - `HDEL key field`
- if exists or not - `HEXISTS key field`

## Postgres SQL

### Setup 🔨

1. Follow this [blog](https://kontext.tech/column/sql-databases/616/install-postgresql-on-wsl) to setup _postgres_ on **wsl**
2. To start postgres server - `sudo service postgresql start`
3. enter postgres prompt - `sudo -u postgres psql`
