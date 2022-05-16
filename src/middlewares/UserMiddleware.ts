import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

export default class UserMiddleware {
  public usernameVal = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;
    if (!username || username === '') {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: '"username" is required' });
    }
    if (typeof username !== 'string') {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: '"username" must be a string' });
    }
    if (username.length < 3) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: '"username" length must be at least 3 characters long' });
    }
    
    next();
  };

  public levelVal = async (req: Request, res: Response, next: NextFunction) => {
    const { level } = req.body;
    if (!level && level !== 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: '"level" is required' });
    }
    if (typeof level !== 'number') {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: '"level" must be a number' });
    }
    if (level < 1) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: '"level" must be greater than or equal to 1' });
    }
    
    next();
  };

  public classeVal = async (req: Request, res: Response, next: NextFunction) => {
    const { classe } = req.body;
    if (!classe || classe === '') {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: '"classe" is required' });
    }
    if (typeof classe !== 'string') {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: '"classe" must be a string' });
    }
    if (classe.length < 3) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: '"classe" length must be at least 3 characters long' });
    }
    
    next();
  };

  public passwordVal = async (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;
    if (!password || password === '') {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: '"password" is required' });
    }
    if (typeof password !== 'string') {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: '"password" must be a string' });
    }
    if (password.length < 8) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: '"password" length must be at least 8 characters long' });
    }
    
    next();
  };
}