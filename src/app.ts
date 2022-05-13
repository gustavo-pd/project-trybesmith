import express from 'express';
import productRouters from './routers/productRouters';

const app = express();

app.use(express.json());

app.use('/products', productRouters);

export default app;
