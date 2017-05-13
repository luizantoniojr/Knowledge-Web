import { Competence } from "app/models/competence";

export class User {
    id: number = 0;
    name: string = "";
    slack: string = ""; 
    competence: Competence[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}