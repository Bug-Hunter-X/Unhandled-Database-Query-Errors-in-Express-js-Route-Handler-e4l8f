const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ...database query to fetch user data using userId...
    if (!userData) {
      return res.status(404).send('User not found');
    }
    res.json(userData);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).send('Database error');
  }
});

// ... other routes ...

app.listen(3000, () => console.log('Server listening on port 3000'));