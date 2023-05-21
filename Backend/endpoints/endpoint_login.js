const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Connection = require("mysql2/typings/mysql/lib/Connection");

module.exports = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  var sql = mysql.format("select * from users where username = ?", [username]);
  console.log("Debug: /login => " + sql);

  Connection.createQuery(sql, async (err, rows) => {
    if (err) {
      return res.send({
        success: false,
        data: null,
        error: err.message,
      });
    }
    if (rows.length == 0) {
      res.send({
        success: false,
        error: "Username not found",
      });
    } else {
      const validPass = await bcrypt.compare(password, rows[0].password);
      if (!validPass) {
        res.send({
          success: true,
          message: "Password Incorrect",
        });
      } else {
        const login_token = jwt.sign(
          {
            userId: rows[0].id,
          },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "7d" }
        );
        res.cookie("user", login_token);
        res.send({
          success: true,
          message: "Authentication Success",
        });
      }
    }
  });
};
