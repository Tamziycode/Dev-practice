require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
app.use(express.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "shawndavid",
  database: "todoapp",
});

const db = pool.promise();

app.get("/api/tasks", async (req, res) => {
  try {
    const { status, date } = req.query;
    let sql = "SELECT * FROM tasks WHERE user_id = 1";
    let params = [];

    // Filter logic
    if (status === "completed") {
      sql += " AND is_completed = true";
    } else if (date === "today") {
      sql += " AND DATE(due_date) = CURDATE() AND is_completed = false";
    } else if (!status && !date) {
      sql += " AND is_completed = false";
    }

    sql += " ORDER BY created_at DESC";

    const [tasks] = await db.execute(sql, params);
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

app.post("/api/tasks", async (req, res) => {
  try {
    const { title, priority, due_date } = req.body;
    const sql = `
      INSERT INTO tasks (user_id, title, priority, due_date, is_completed) 
      VALUES (1, ?, ?, ?, false)
    `;
    const [result] = await db.execute(sql, [
      title,
      priority || "Medium",
      due_date,
    ]);

    res.status(201).json({
      id: result.insertId,
      title,
      priority,
      due_date,
      is_completed: false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create task" });
  }
});

app.patch("/api/tasks/:id/complete", async (req, res) => {
  try {
    const taskId = req.params.id;
    const { is_completed } = req.body;

    const sql = "UPDATE tasks SET is_completed = ? WHERE id = ?";
    await db.execute(sql, [is_completed, taskId]);

    res.json({ message: "Task updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update task" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is blasting off on port ${PORT}`);
});
