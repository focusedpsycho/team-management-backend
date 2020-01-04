const mysql = require("mysql2");

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbName = process.env.DB_NAME;
const dbPassword = process.env.DB_PASSWORD;

console.log(dbName, dbPassword, dbUser, dbHost);

async function main() {

// const pool  = mysql.createPool({ hard coded version use for testing
//   connectionLimit : 10,
//   host            : 'http://localhost',
//   user            : 'root',
//   password        : 'mysql',
//   database        : 'team'
// });
// create the pool
  const pool = mysql.createPool({
    connectionLimit: 10,
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName
  });

  module.exports = pool.promise();
}

(async () => {
    await main();
    console.log('successfully created connection pool');

})().catch(e => {
    console.log('error in creating connection pool')
});


