import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const uri = "mongodb+srv://achaurasia8931:Y98Esr6AaDqoE8q5@cluster0.6cwdb.mongodb.net/Url";
        if (!uri) {
            throw new Error('MongoDB URI not found in environment variables');
        }

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectDB;
