import db from "../config/db.js";

export const getAllUsers = async (req, res) => {
  try {
    const [users] = await db.execute("SELECT * FROM users");
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [user] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
    if (user.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: user[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const createUser = async (req, res) => {
  const { username, email } = req.body;
  try {
    await db.execute("INSERT INTO users(username, email) VALUES(?,?)", [
      username,
      email,
    ]);
    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  try {
    const [result] = await db.execute(
      "UPDATE users SET username = ?, email = ? WHERE id = ?",
      [username, email, id]
    );
    if (!id || !username || !email) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: result,
    });
  } catch (error) {}
};
