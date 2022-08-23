var mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'test_pass',
    database: 'test_db'
  });

  connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

 connection.query(`CREATE TABLE IF NOT EXISTS users(
    id int primary key auto_increment,
    firstname varchar(255) not null,
    lastname varchar(255) not null,
    authorized boolean not null
 );`
 )

 connection.query(`INSERT INTO users(firstname, lastname, authorized)
         values('Leha', 'Alexeevich', false);`)

connection.query(`UPDATE users SET firstname='Pasha' WHERE firstname='Andrey'`)

connection.query(`SELECT * FROM users;`, function(err, results) {
    if(err) console.log(err);
    console.log(results);
})

