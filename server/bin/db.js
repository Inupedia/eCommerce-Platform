const mongoose = require('mongoose')
// const URI = process.env.DATABASE_URI || 'mongodb://localhost:27017/shopping'
const URI = 'mongodb://localhost:27017/shopping'

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('successfully connect to database');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

// mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true})
//     .then(() => {
//         console.log("successfully connect to database")
//         // only start server when connecting to database
//         startServer('4000')
//     })
//     .catch(error => {
//         console.error('Please start your mongo database', error)
//     })

module.exports = connectDB