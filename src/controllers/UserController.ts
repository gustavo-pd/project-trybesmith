import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';
import AuthUser from '../auth/AuthUser';

const auth = new AuthUser();

export default class ProductController {
  public service = new UserService();

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const { username, classe, level, password } = req.body;
    try {
      const user = await this.service.create(username, classe, level, password);
      const token = auth.generateToken(user);
      return res.status(StatusCodes.CREATED).json({ token });
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('User already exists')) {
        return res.status(StatusCodes.CONFLICT).json({ message: error.message });
      }
      next(error);
    }  
  };
}