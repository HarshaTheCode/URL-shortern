import express from 'express';
import {  shortenurl, redirecturl } from './URLcontrollers.js';
import { welcome,about } from '../../routes/mainroutes.js';

export const routes = express.Router();


//in this we are using the Router for the managing our routes 
// it will automatically navugate the user accordign to the end point for every end point
// we made an dediacted page for that and the function calling are done when user hit that point
// 

routes.get('/',welcome)
routes.get('/about',about)
routes.post('/api/shorten',shortenurl);
routes.get("/api/:code",redirecturl)
