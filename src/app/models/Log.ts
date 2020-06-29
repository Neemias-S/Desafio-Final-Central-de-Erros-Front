import { Occurrence } from './Occurrence';
import { User } from './User';
import { environment } from '../../environments/environment.prod';
export class Log {

    constructor(
        public id : number,
        public title : string,
        public description : string,
        public origin : string,
        public occurrences : Array<Occurrence>,
        public lastOccurrence : Date,
        public level : string,
        public checked? : boolean
    ){}

}