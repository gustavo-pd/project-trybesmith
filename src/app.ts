import express from 'express';
import productRouters from './routers/productRouters';
import userRouters from './routers/userRouters';

const app = express();

app.use(express.json());

app.use('/products', productRouters);
app.use('/users', userRouters);

export default app;
