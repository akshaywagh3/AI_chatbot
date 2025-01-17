import express from 'express';
import morgan from 'morgan';
import {config} from "dotenv";
import appRouter from './routes/index.js';
config();

const app = express();


app.use(express.json());

//remove in production
app.use(morgan("dev"));

app.use('/api/v1',appRouter);


export default app ;