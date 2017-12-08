import { Promise} from '../promise.model';
import { Observable } from "rxjs/Observable";
export class Promisee {
    private _name: string;
    private _id: string;
  
    constructor(name: string) {
      this._name = name;
    }
    get id(): string {
      return this._id;
    }
    get name() : string {
      return this._name;
    }
    static fromJSON(json) : Promisee {
      const u = new Promisee(json.name);
      u._id = json._id;
      return u;
    }
    toJSON(){
      return {
          _id: this._id,    
          name: this._name
      }
    }
  }