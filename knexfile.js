module.exports = {
  // client: 'mysql',
  // connection: {
  //   user: 'root',
  //   password: 'password',
  //   database: 'united_dreamers_database'
  // }
  client: 'mysql',
  development: {
    client: "mysql",
    connection: {
      // host: "127.0.0.1",
      user: "root",
      password: 'password',
      database: "united_dreamers_database"
    }
  },
  production: {
    client: "mysql",
    connection: {
      host: "us-cdbr-iron-east-04.cleardb.net",
      user: "b86c797258618e",
      password: "98367645",
      database: "heroku_55e2ea1dcf37cd4"
    }
  }
}
