import { ResultSetHeader } from 'mysql2/promise';
import conn from './connection';
import IUser from '../interfaces/user.interface';

export default class UserModel {
  public create = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<IUser> => {
    const result = await conn.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    return { id: result[0].insertId, username, classe, level, password };
  };
}