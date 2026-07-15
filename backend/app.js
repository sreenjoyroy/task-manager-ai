const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [
  { id: 1, title: 'Learn Express', completed: false },
  { id: 2, title: 'Build a task API', completed: true }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: 'Task title is required' });
  }

  const task = {
    id: Date.now(),
    title: title.trim(),
    completed: false
  };

  tasks.push(task);
  res.status(201).json(task);
});

app.listen(PORT, () => {
  console.log(`Task API running on http://localhost:${PORT}`);
});
