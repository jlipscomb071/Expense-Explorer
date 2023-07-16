const express = require('express');
const app = express();

// Test route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Backend and frontend are connected!' });
});

const port = 3001; // or any port you prefer
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
