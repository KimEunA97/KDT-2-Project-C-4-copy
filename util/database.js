function mysqlInsert(name,password){
  let mysql      = require('mysql');
  let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'testuser',
    password : 'dD1354268!',
    database : 'test'
  });
  connection.connect();
  
  connection.query(`INSERT INTO new_table (username,password) VALUSE('${name}','${password}')`, function (error, results, fields) {
    if (error) throw error;
    console.log(results)
  });
  connection.end(); 
  }

  function mysqlDelete(id){
    let mysql      = require('mysql');
    let connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'testuser',
      password : 'dD1354268!',
      database : 'test'
    });
    connection.connect();
    
    connection.query(`DELETE FROM new_table WHERE id =${id}`, function (error, results, fields) {
      if (error) throw error;
      console.log(results)
    });
    connection.end(); 
    }
  function mysqlSearch(){
    let mysql      = require('mysql');
    let connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'testuser',
      password : 'dD1354268!',
      database : 'test'
    });
    connection.connect();
    
    connection.query(`SELECT * FROM new_table`, function (error, results, fields) {
      if (error) throw error;
      console.log(results)
    });
    connection.end(); 
    }

  // export{mysqlInsert,mysqlSearch,mysqlDelete}

  
  function board(title, content){
    let mysql = require('mysql');
    let connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'testuser',
      password : 'dD1354268!',
      database : 'parksuyeon'
    });
    connection.connect();

    connection.query(`INSERT INTO parksuyeon(title, content) VALUES('${title}','${content}')`), function(error, results, fields){
      if(error) throw error;
      console.log(results)
    };
    connection.end(); 
  }
  export{mysqlInsert,mysqlSearch,mysqlDelete,board}

//  export default {board_write}
