import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productController = new ProductController();

const route = Router();

route.get('/', productController.getAll);

export default route;