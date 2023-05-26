const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  var sql = mysql.format("select * from users where username = ?", [username]);
  console.log("Debug: /login => " + sql);

  connection.query(sql, async (err, rows) => {
    if (err) {
      return res.status(401).send({
        success: false,
        data: null,
        error: err.message,
      });
    }
    if (rows.length == 0) {
      res.status(401).send({
        success: false,
        error: "Username not found",
      });
    } else {
      const validPass = await bcrypt.compare(password, rows[0].password);
      if (!validPass) {
        res.status(401).send({
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
        res.cookie("jwt_token", login_token);
        res.status(201).send({
          success: true,
          message: "Authentication Success",
        });
      }
    }
  });
};
