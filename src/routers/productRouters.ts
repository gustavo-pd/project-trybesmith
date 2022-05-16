import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import ProductMiddleware from '../middlewares/ProductMiddleware';

const productController = new ProductController();
const productMiddleware = new ProductMiddleware();

const route = Router();

route.get('/', productController.getAll);
route.get('/:id', productController.getOne);
route.post('/', productMiddleware.nameVal, productMiddleware.amountVal, productController.create);

export default route;