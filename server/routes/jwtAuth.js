const router = require("express").Router();
const pool = require("../db");

// registering
router.post("/", async (req, res) => {
  try {
    // destructure the req.body (name, email, password)
    const { name, email, password } = req.body;
    // check if users exists, if user exists then throw error
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    res.json(user.rows);
    // bcrypt the user password
    // enter the new user into the database
    // generate jwt token
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
