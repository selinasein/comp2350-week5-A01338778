const mysql = require("mysql2/promise");

const is_qoddi = process.env.IS_QODDI || false;

const dbConfigQoddi = {
  host: "sql.freedb.tech",
  user: "freedb_2350_main_sel",
  password: "Qk28*ry9NTw*w8z",
  database: "freedb_comp2350-A01338778",
  multipleStatements: false,
};

const dbConfigLocal = {
  host: "localhost",
  user: "root",
  password: "MySQLtpdls7^*",
  database: "database",
  multipleStatements: false,
};

if (is_qoddi) {
  var database = mysql.createPool(dbConfigQoddi);
} else {
  var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
