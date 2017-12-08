import {Promisee} from './promisee/promisee.model';
export class Promise {
    public id: string;
    private _name: string;
    private _description: string;
    private _promisees: Promisee[]

    constructor(description: string, name?:string, promisees?: Promisee[], id?: string) {
      this.id = id || undefined;
      this._description = description || 'default description';
      this._name = name || 'default promisename';
      this._promisees = promisees || [];
    }
    get name() : string {
      return this._name;
    }
    get description() : string {
        return this._description;
      }
    get promisees() : Promisee[] {
      return this._promisees;
    }
    set name(name : string) {
      this._name = name;
    }
    set description(description : string){
      this._description = description;
    }
    set promisees(promisees : Promisee[]){
      this._promisees = promisees;
    }
    addPromisee(promisee: Promisee) {
      this._promisees.push(promisee);
    }
    toJSON(){
      return { 
        _id: this.id, 
        name: this._name,
        description: this._description,
        promisees: this._promisees 
      }
    }
    static fromJSON(json) : Promise {
      const prom = new Promise(json.description, json.name, json.promisees);
      prom.id = json._id;
      return prom;
    }
}