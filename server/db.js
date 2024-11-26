// // importing moongose
import mongoose from "mongoose";

// // importing dotenv 
import dotenv from "dotenv";
dotenv.config(
);
//  in database connection it is necessery to import the dotenv file to get the database url from the .env file
const MONGO_URL = process.env.MONGO_URL

export const mongodbconnection = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            // mongoose.connect(process.env.MONGODB_URI, {
            //   useNewUrlParser: true,
            //   useUnifiedTopology: true,
            //   useCreateIndex: true,
        }).then(() => {
            console.log("connected to  mongodb")
        })
    } catch (error) {
        console.log('mongo db not connected')
    }
}
