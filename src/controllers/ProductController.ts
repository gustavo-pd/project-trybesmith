import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  public service = new ProductService();
  
  public getAll = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const products = await this.service.getAll();
    return res.status(StatusCodes.OK).json(products);
  };

  public getOne = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const id = parseInt(req.params.id, 10);
    const product = await this.service.getOne(id);

    if (!product) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'Product not found!' });
    }

    return res.status(StatusCodes.OK).json(product);
  };
}