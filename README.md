# Impact test one
> Impact test one is a REST API for users, categories, authors and books.


This project is an rest api and a mini client for managing books, authors, categories and users.

![](header.png)

## Installation


```sh
git clone https://github.com/kg9999/impact_test1.git
npm install
change configuration details in configs/config.json
```

Configuration: configs/config.json

```sh
{
    "db": {
        "dialect": "mysql", // using mysql, change to 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql' for different engine
        "host": "127.0.0.1",
        "port": 8000, // to run on different port
        "user": "root", // change to db user
        "pass": "kgopelo99", // chnage to db pass
        "database": "impact_test", // change to db name
        "pool_max": 10,
        "pool_min": 0,
        "pool_acquire": 30000,
        "pool_idle": 10000
    },
    "auth": {
        "web_token_expire": "30d",
        "web_token_secret_key": "MyImpactSecretKey"
    },
    "server": {
        "port": 8080
    }
}
```

## Usage
Run
```sh
npm start or node app.js
```

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```

