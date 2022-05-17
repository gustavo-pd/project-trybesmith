import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/OrderService';

export default class ProductController {
  public service = new OrderService();
  
  public getAll = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const orders = await this.service.getAllOrders();
    return res.status(StatusCodes.OK).json(orders);
  };
}