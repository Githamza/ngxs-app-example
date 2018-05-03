import { State, Action, StateContext, Selector } from '@ngxs/store';

import { AddFavoris, DeleteFavoris } from './favoris.actions';
import { FilmCard } from './../models/filmCard';

export class FavorisStateModel {
    filmCards: FilmCard[];
}
@State<FavorisStateModel>({
    name: 'favoris',
    defaults: { filmCards: [] }
})

export class FavorisState {
    @Selector()
    static getFavoris(state: FavorisStateModel) {
        return state.filmCards;
    }
    @Selector()
    static getFavorisById(state: FavorisStateModel, id: number) {
        return state.filmCards.filter(el => el.id === id);
    }
    @Action(AddFavoris)
    add({ getState, patchState }: StateContext<FavorisStateModel>, { payload }: AddFavoris) {
        const state = getState();
        patchState({
            filmCards: [...state.filmCards, payload]
        });
    }
    @Action(DeleteFavoris)

    remove({ getState, patchState }: StateContext<FavorisStateModel>, { payload }: DeleteFavoris) {
        patchState({
            filmCards: getState().filmCards.filter(el => el.id !== payload.id)
        });
    }
}
