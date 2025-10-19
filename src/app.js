import express, { json } from 'express';
import {routes} from './controllers/URLroutes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app= express();
app.use(express.json())
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));
app.use('/',routes);

app.listen(5000, () => console.log("Server started on http://localhost:5000"));