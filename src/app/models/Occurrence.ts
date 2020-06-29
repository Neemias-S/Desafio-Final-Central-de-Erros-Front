import { User } from './User';
export class Occurrence {


    constructor(
        public id : number,
        public idLog : number,
        public dtCreated : Date,
        public environment : string,
        public user : User,
        public status? : string,
    ){}

}