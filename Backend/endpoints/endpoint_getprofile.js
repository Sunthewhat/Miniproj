const mysql = require("mysql2");
const util = require("util");

module.exports = async (req, res) => {
  //   console.log(req.userId);
  //   console.log(req.cookies);
  const query = util.promisify(connection.query).bind(connection);
  try {
    const users = await query("select username from users where id = ?", [
      req.userId,
    ]);
      const user = users[0];
    // console.log(users);
    res.send(user);
  } catch (error) {
    return res.status(500).json({
      success: false,
      // error: "Username already existed",
    });
  }
};
