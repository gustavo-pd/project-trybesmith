import UserModel from '../models/UserModel';
import IUser from '../interfaces/user.interface';

export default class UserService {
  public model = new UserModel();

  public create = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<IUser> => {
    const newUser = await this.model.create(username, classe, level, password);
    return newUser;
  };
}