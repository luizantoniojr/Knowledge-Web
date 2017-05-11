import { User } from '../models/user';
import { Competence } from '../models/competence';

export class FeedItem {
    user: User;
    competence: Competence;
    time: string = '';
    text: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}