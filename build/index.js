"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./routes/router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
// express configuration
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.set("PORT", 7000);
app.set("BASE_URL", "localhost");
// mongoDB connection
const mongo_db_url = process.env.mongo_db_url;
if (!mongo_db_url) {
    console.log("Mongo db connection error");
    process.exit(1);
}
mongoose_1.default.connect(mongo_db_url, {})
    .then(() => {
    console.log("Mongo DB connected");
})
    .catch((error) => {
    console.log("Error conencting mongoDB" + error);
    process.exit(1);
});
// routes
app.use("/api/v1", router_1.default);
// listen server
try {
    const port = app.get("PORT");
    const baseUrl = app.get("BASE_URL");
    server.listen(port, () => {
        console.log("Server stated at port ");
    });
}
catch (error) {
    console.log(error);
}
exports.default = server;
