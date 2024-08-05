import { Router } from 'express'
import { generateProducts } from "../utils.js"
import CustomError from '../services/customError.js';
import EErrors from '../services/enumErrores.js';
import { generateProductErrorInfo } from '../services/infoErrors.js';

const ArrayProduct = [];
const router = Router();

router.get('/mockingproducts', (req, res) => {
    try {
        const products = generateProducts()
        res.status(200).json({ status: "Products generados", products })    
    } catch (error) {
        console.error("parece que algo no funciono");    
        res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }
});

router.get('/', (req, res) => {
    res.status(200).json(ArrayProduct);
});

router.post('/addProduct', (req, res) => {
    const { title, description, price, code, status ,category, stock } = req.body;

    if (typeof(title) === 'string' && 
        typeof(description) === 'string' &&
        typeof(price) === 'number' &&
        typeof(code) === 'string' && 
        typeof(status) === 'boolean' && 
        typeof(category) === 'string' && 
        typeof(stock) === 'number') {

        const product = {
            id: ArrayProduct.length === 0 ? 0 : ArrayProduct[ArrayProduct.length - 1].id + 1,
            title: title,
            description: description,
            price: price,
            status: status,
            code: code,
            category: category,
            stock: stock
        };

        ArrayProduct.push(product);
        res.status(201).json({ status: "successful", product });

    } else {
        const product = { title, description, price, code, status, category, stock };
        CustomError.createError({
            name: "Creación de Producto",
            cause: generateProductErrorInfo(product),
            message: `Error al crear el Producto. Campos faltantes o incorrectos.`,
            code: EErrors.INVALID_TYPE_ERROR
        });

        res.status(400).json({ status: "hubo un error al crear el producto", error: generateProductErrorInfo(product) });
    }
});

export default router;
