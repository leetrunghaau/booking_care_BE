const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const app = express();
// Load environment variables from .env file
dotenv.config();

app.use(cors());


// Parse JSON body
app.use(express.json());
// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', '..', 'public')));
// Routes
const apiRoutes = require('./v1/routes/index');
const { errorMiddleware } = require('./v1/middlewares/error-middleweara');
app.use('/api/v1', apiRoutes);
// Error handling middleware
app.use(errorMiddleware);



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
