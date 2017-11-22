import {User} from '../user/user.model';
export class Promise {
    private _promiseID: number;
    private _name: string;
    private _description: string;
    private _users: Array<User>
    private _userIDs: number[];
    constructor(description: string, name?:string, userIDs?: number[]) {
      this._description = description;
      this._name = name || 'default promisename';
      this._users = new Array<User>();
      this._userIDs = userIDs || [];
    }
    get name() : string {
      return this._name;
    }
    get description() : string {
        return this._description;
      }
    get users() : Array<User> {
      return this._users;
    }
    addUser(name: string) {
      this._users.push(new User(name));
    }
}