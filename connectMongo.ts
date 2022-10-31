import mongoose from 'mongoose';

async function connectMongoDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs_bms');
        console.log('Mongoose connect successfully!');
    } catch (error) {
        console.log('Mongoose connect failure!');
    }
}

export { connectMongoDB };
