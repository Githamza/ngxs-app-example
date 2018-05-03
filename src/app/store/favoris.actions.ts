import { FilmCard } from './../models/filmCard';

export class AddFavoris {
    static readonly type = '[FAVORIS] add';
    constructor(public payload: FilmCard) {
    }
}
export class DeleteFavoris {
    static readonly type = '[FAVORIS] delete';
    constructor(public payload: FilmCard) {
    }
}
