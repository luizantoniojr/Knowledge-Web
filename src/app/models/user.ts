import { Competence } from "app/models/competence";

export class User {
    id: string = "";
    name: string = "";
    slack: string = ""; 
    competences: Competence[] = new Array();
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}