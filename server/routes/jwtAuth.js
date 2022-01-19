const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

// registering
router.post("/register", async (req, res) => {
  try {
    // destructure the req.body (name, email, password)
    const { name, email, password } = req.body;
    // check if users exists, if user exists then throw error
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    }

    // bcrypt the user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    // enter the new user into the database
    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, bcryptPassword]
    );

    // generate jwt token
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
