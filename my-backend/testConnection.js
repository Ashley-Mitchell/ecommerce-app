const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
        
        // Optional: You can also create a simple query to ensure everything is working
        const db = mongoose.connection;
        const collections = await db.db.listCollections().toArray();
        console.log('Collections:', collections);
        
        // Close the connection after checking
        await mongoose.disconnect();
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

connectDB();
