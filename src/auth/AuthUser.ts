import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

type User = {
  id: number;
  username: string;
  password: string;
};

export default class AuthUser {
  private SECRET = 'trybesmith';

  private config: SignOptions = {
    expiresIn: '7d',
  };

  public generateToken = (user: User): string => {
    const { id, username, password } = user;
    const token = jwt.sign({ id, username, password }, this.SECRET, this.config);

    return token;
  };
}