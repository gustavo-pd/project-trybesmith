import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

export default class ProductMiddleware {
  public nameVal = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    if (!name || name === '') {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: '"name" is required' });
    }
    if (typeof name !== 'string') {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: '"name" must be a string' });
    }
    if (name.length < 3) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: '"name" length must be at least 3 characters long' });
    }
    
    next();
  };

  public amountVal = async (req: Request, res: Response, next: NextFunction) => {
    const { amount } = req.body;
    if (!amount || amount === '') {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: '"amount" is required' });
    }
    if (typeof amount !== 'string') {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: '"amount" must be a string' });
    }
    if (amount.length < 3) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: '"amount" length must be at least 3 characters long' });
    }
    
    next();
  };
}