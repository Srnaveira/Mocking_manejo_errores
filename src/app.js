import express from 'express';
import productsRoute from './routes/products.router.js';
import errorHandlebars from './middlewares/index.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/products', productsRoute);
app.use(errorHandlebars);

app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en el puerto ${PORT}`);
});