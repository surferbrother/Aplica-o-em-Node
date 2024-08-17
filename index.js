const express = require('express');
const app = express();
const movieRoutes = require('./routes/index');

app.use(express.json());
app.use('/api', movieRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
