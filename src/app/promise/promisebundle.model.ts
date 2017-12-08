import {Promise} from './promise.model';
export class PromiseBundle {
    private _id : string;
    private _promises : Promise[] = [];

    constructor(promises : Promise[]) {
        this._promises = promises;
    }

    get promises() : Promise[] {
      return this._promises;
    }

    addPromise(promise: Promise) {
      this._promises.push(promise);
    }
    
    toJSON(){
      return { 
        _id: this._id, 
        promisees: this._promises 
      }
    }
    static fromJSON(json) : PromiseBundle {
      const prom = new PromiseBundle(json.promises);
      prom._id = json._id;
      return prom;
    }
}