export class Competence {
    id: number = 0;
    name: string = "";

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}