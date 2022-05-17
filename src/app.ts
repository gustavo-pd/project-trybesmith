import express from 'express';
import productRouters from './routers/productRouters';
import userRouters from './routers/userRouters';
import orderRouters from './routers/orderRouters';

const app = express();

app.use(express.json());

app.use('/products', productRouters);
app.use('/users', userRouters);
app.use('/orders', orderRouters);

export default app;
