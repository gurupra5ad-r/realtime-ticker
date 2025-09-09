import express from 'express';
import cors from 'cors';
import http from 'http';
import { startWSS } from './broadcaster.js';

const app = express();
app.use(cors());
app.get('/', (_, res)=> res.json({ ok: true }));

const server = http.createServer(app);
startWSS(server);
server.listen(3000, ()=> console.log('server on http://localhost:3000'));
