const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        'mongodb://pallavimshr2707_db_user:yGpF8o31HfEjUXPj@ac-ryvcyyi-shard-00-00.ree9uek.mongodb.net:27017,ac-ryvcyyi-shard-00-01.ree9uek.mongodb.net:27017,ac-ryvcyyi-shard-00-02.ree9uek.mongodb.net:27017/devTinder?ssl=true&replicaSet=atlas-kg5j0o-shard-0&authSource=admin&appName=DevTinder'
    );

    console.log('MongoDB connected');
    console.log('DATABASE:', mongoose.connection.name);
};

module.exports = connectDB;