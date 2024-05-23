// Import the Express application from the app.js file
const app = require('./app');

// Define the port to listen on (use the environment variable PORT if available, otherwise default to 3000)
const PORT = process.env.PORT || 3001;

// Start the Express application, listening on the specified port
app.listen(PORT, () => {
  // Log a message indicating that the server is running and listening on the specified port
  console.log(`Server is running on port ${PORT}`);
});
