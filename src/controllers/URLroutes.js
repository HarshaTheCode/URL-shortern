import express from 'express';
import {  shortenurl, redirecturl } from './URLcontrollers.js';
import { welcome,about } from '../../routes/mainroutes.js';

export const routes = express.Router();

routes.get('/',welcome)
routes.get('/about',about)
routes.post('/api/shorten',shortenurl);
routes.get("/api/:code",redirecturl)
