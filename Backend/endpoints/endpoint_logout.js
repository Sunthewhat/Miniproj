const bcrypt = require("bcrypt");
const mysql = require("mysql2");
const util = require("util");

const logout = async (req, res) => {
  res.clearCookie("jwt_token");
  res.send();
};
module.exports = {
  logout,
};
