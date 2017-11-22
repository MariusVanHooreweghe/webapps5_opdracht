export class User {
    private _username: string;
    private _promiseDescriptions = new Array<string>();
    private _id: number;
  
    constructor(username: string) {
      this._username = username;
    }
    get username() : string {
      return this._username;
    }	
    makePromise(description: string) {
      this._promiseDescriptions.push(description);
    }
  }