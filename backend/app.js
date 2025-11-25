import express from 'express';
import doetnv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { mongoConection } from './src/config/db.js';
import {UserRouter} from './src/routes/users.routes.js';
import {productRouter} from './src/routes/products.routes.js';
import { loginRouter } from './src/routes/login.Routes.js';

const app = express();
doetnv.config();
const port = process.env.PORT;
mongoConection();
const _filename = fileURLToPath(import.meta.url); //_filename = backend/app.js
const _dirname = path.dirname(_filename); //_dirname = backend

    /* app.get('/', (req, res) => {
        res.send('¡Hola, mundo!');
    }) */

app.use(cors());
app.use(express.json());
app.use('/users', UserRouter);
app.use('/products', productRouter);
app.use('/uploads', express.static(path.join(_dirname,'uploads')));//Expone la carpeta que necesito a la red
app.use('/login', loginRouter)

app.use(express.static(path.join(_dirname, "dist", "frontend", "browser")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(_dirname, "dist", "frontend", "browser", "index.html"));
});

app.listen(port, () =>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});