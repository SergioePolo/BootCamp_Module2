import express from 'express';
import doetnv from 'dotenv';
import { mongoConection } from './src/config/db.js';

const app = express();
doetnv.config();
const port = process.env.PORT;
mongoConection();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
})

app.listen(port, () =>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});