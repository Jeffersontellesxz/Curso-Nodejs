const mysql = require("mysql");

const connMysql = () => {
  console.log("Conexao com db estabelecida");
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_new_password",
    database: "portal_noticias"
  });
};
module.exports = () => {
  console.log("conexao com o modulo OK!");
  return connMysql;
};
