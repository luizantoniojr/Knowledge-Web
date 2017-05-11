export class User {
    id: number = 0;
    name: string = "";
    slack: string = "";

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}