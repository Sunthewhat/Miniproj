const bcrypt = require("bcrypt");
const mysql = require("mysql2");

function validPassword(password) {
  return (
    password.length >= 8 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password)
  );
}

module.exports = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!validPassword(password)) {
    return res.json({
      success: false,
      message: "Password does not match requirements",
    });
  }

  const hashed_password = await bcrypt.hash(password, 10);

  var sql = mysql.format(
    "INSERT INTO users (username,password) VALUES (?,?)",
    [username, hashed_password]
  );

  console.log("/register => " + sql);

  Connection.query(sql, (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        error: err.message,
      });
    }

    if (rows) {
      res.json({
        success: true,
        error: null,
        message: "Create Successed",
      });
    }
  });
};
