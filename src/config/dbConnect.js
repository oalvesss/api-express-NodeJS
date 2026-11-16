import mongoose from "mongoose";

async function conectaMongo(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};

export default conectaMongo;
