const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to MongoDB Atlas using the connection string from environment variables
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit if connection fails
  }
};

module.exports = connectDB;
