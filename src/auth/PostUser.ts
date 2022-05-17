import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

type User = {
  id: number;
  username: string;
  password: string;
};

export default class AuthUser {
  private SECRET = '123456';

  private config: SignOptions = {
    expiresIn: '15d',
  };

  public tokenGen = (user: User): string => {
    const { id, username, password } = user;
    const token = jwt.sign({ id, username, password }, this.SECRET, this.config);

    return token;
  };
}