const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');
// Add near the top of the file
const apiRoutes = require('./routes/apiRoutes'); /*Remember that you don't have to specify index.js in the path 
(e.g., ./routes/apiRoutes/index.js). If the directory has an index.js file in it, Node.js will automatically look for 
it when requiring the directory.
*/
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Add after Express middleware
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });