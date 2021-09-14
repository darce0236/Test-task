var database = require('./database/database');

class Controller {
  async CreateUser(request, response){
    const {name, email, password} = request.body;
    var newUser = await database.query(
      'INSERT INTO users (name, email, password) values ($1, $2, $3) RETURNING *', [name, email, password]);

    response.json(newUser.rows[0]);
  }
  async GetAllUser(request, response){
    var users = await database.query(
      'SELECT * FROM users where deletedat is null');

    response.json(users.rows);
  }
  async GetUserId(request, response){
    var id = request.params.id;
    var user = await database.query(
      'SELECT * FROM users where id = $1', [id]);

    response.json(user.rows[0]);
  }
  async GetUserName(request, response){
    var name = request.params.name;
    var user = await database.query(
      'SELECT * FROM users where name = $1', [name]);

    response.json(user.rows[0]);
  }
  async UpdateUser(request, response){
    var {id, name, email, password} = request.body;
    var user = await database.query(
      'UPDATE users set name = $1, email = $2, password = $3 where id = $4 RETURNING *', [name, email, password, id]);

    response.json(user.rows[0]);
  }
  async DeleteUser(request, response){
    var id = request.params.id;
    var user = await database.query(
      'UPDATE users set deletedat = now() where id = $1 RETURNING *', [id]);

    response.json(user.rows[0]);
  }
}

module.exports = new Controller();
