import express from 'express';
import doetnv from 'dotenv';
import { mongoConection } from './src/config/db.js';
import {UserRouter} from './src/routes/users.routes.js';
import {productRouter} from './src/routes/products.routes.js';

const app = express();
doetnv.config();
const port = process.env.PORT;
mongoConection();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
})

app.use(express.json());
app.use('/users', UserRouter);
app.use('/products', productRouter);

app.listen(port, () =>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});