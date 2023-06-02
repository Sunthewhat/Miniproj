const bcrypt = require("bcrypt");
const mysql = require("mysql2");
const util = require("util");

function validPassword(password) {
  return (
    password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password)
  );
}

module.exports = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const query = util.promisify(connection.query).bind(connection);

  try {
    var sql = mysql.format("select * from users where username = ?", [
      username,
    ]); 2
    const users = await query(sql);
    if (users.length != 0) {
      return res.status(400).json({
        success: false,
        error: "Username already existed",
      });
    }

    if (!validPassword(password)) {
      return res.status(400).json({
        success: false,
        message: "Password does not match requirements",
      });
    }

    const hashed_password = await bcrypt.hash(password, 10);

    sql = mysql.format("INSERT INTO users (username,password) VALUES (?,?)", [
      username,
      hashed_password,
    ]);

    console.log("/register => " + sql);
    await query(sql);
    res.status(201).send();
  } catch (error) {
    return res.status(500).json({
      success: false,
      // error: "Username already existed",
    });
  }
};
