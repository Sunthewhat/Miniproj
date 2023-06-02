const mysql = require("mysql2");
const util = require("util");

const create = async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  const user_id = req.userId;
  const name = req.body.name;
  const description = req.body.description;
  var sql = mysql.format(
    "insert into cafe_list (user_id, name, description) value (?,?,?)",
    [user_id, name, description]
  );
  try {
    await query(sql);
    res.send();
  } catch (error) {
    res.status(500).send({
      error: error,
    });
  }
};

const read = async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  var sql = mysql.format("select * from cafe_list");
  try {
    const data = await query(sql);
    res.send({
      data: data,
      userId: req.userId,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  const id = req.params.id;
  const name = req.body.name;
  const description = req.body.description;
  var sql = mysql.format(
    "update cafe_list set name = ?, description = ? where id = ?",
    [name, description, id]
  );
  try {
    await query(sql);
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  const id = req.params.id;
  var sql = mysql.format("delete from cafe_list where id = ?", [id]);
  try {
    await query(sql);
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  create,
  update,
  read,
  remove,
};
