import express, { Express , Request, Response} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import http from "http";
import mongoose from "mongoose";
import router from "./routes/router";
dotenv.config();

const app:Express = express();
const server = http.createServer(app);

// express configuration
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.set("PORT", 7000);
app.set("BASE_URL", "localhost");

// mongoDB connection
const mongo_db_url = process.env.mongo_db_url;
if(!mongo_db_url){
    console.log("Mongo db connection error");
    process.exit(1);
}
mongoose.connect(mongo_db_url, {})
.then(() => {
    console.log("Mongo DB connected");
})
.catch((error) => {
    console.log("Error conencting mongoDB" + error );
    process.exit(1);
})

// routes
app.use("/api/v1", router);

// listen server
try {
    const port = app.get("PORT");
    const baseUrl = app.get("BASE_URL");
    server.listen(port, () => {
        console.log("Server stated at port ");
        
    });
} catch (error) {
    console.log(error);
}

export default server;