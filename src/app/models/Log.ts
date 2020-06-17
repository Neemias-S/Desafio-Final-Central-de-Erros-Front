import { User } from './User';
import { environment } from '../../environments/environment.prod';
export class Log {

    constructor(
        public id : number,
        public title : string,
        public description : string,
        public occurrencies : number,
        public timestamp : Date,
        public environment : string,
        public origin : string,
        public level : string,
        public user : User
    ){}

}