const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data using userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.json(userData);
});

// ... other routes ...

app.listen(3000, () => console.log('Server listening on port 3000'));