import 'dotenv/config';
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import http from "http";
import { connectDB } from 'db';
import { createRoutes } from 'routes';

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 60,
    })
);
app.use(cors());
app.use(mongoSanitize());
app.use(express.json());

createRoutes(app);

const port = process.env.PORT || 4000;

connectDB(process.env.DB_URL, () => {
    server.listen(port, async () => {
        console.log(`Server is listening on port ${port}...`)
    });
});
