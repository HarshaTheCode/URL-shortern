import express, { json } from 'express';
import {routes} from './controllers/URLroutes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app= express();
// hear we are making our app capable of using the json in the formate of resod and request by this line
app.use(express.json())
// cors is an inbuid security system in brwers to run them in one origin
// by using the corss we can connect our frontend apis to the backend 
app.use(cors());


app.use(express.static(path.join(__dirname, '../public')));

// hear we are using the routes so whenevr the user hit the '/ 'endpoint then it will be triggerd 
app.use('/',routes);

//  it is an test console log so we can checck our tottal code is runnnig correctly 
app.listen(5000, () => console.log("Server started on http://localhost:5000"));