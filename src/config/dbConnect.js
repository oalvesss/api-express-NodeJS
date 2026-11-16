import mongoose from "mongoose";

async function conectaMongo(){
    mongoose.connect("mongodb+srv://alvestche12_db_user:rbhogaSRsH17nxEW@cluster0.l3xys8e.mongodb.net/livraria");

    return mongoose.connection;
};

export default conectaMongo;
