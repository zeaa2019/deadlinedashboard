const mysql = require('mysql');
const config = require('./config.json');
const sqlPromise = initDb();

async function initDb(){
  return await mysql.createConnection(config.mysql);
}

async function saveDeadline(newDeadline){
  const sql = await sqlPromise;
  const dbRecord = {
    deadline: newDeadline,
  };
  const insertQuery = sql.format('INSERT INTO Deadlines SET ?', dbRecord);
  await sql.query(insertQuery);
}
